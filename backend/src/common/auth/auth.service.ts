/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/modules/user/user.entity';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(loginDto: LoginDto) {
    const user = await this.userService.findUserByUsername(loginDto.username);
    if (user) {
      throw new UnauthorizedException('User already exists');
    }
    const newUser = await this.userService.createUser(loginDto);
    const payload = {
      username: newUser.username,
      sub: newUser.id,
      roles: newUser.roles,
    };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_SECRET,
      expiresIn: process.env.REFRESH_EXPIRES_IN,
    });
    await this.userService.updateRefreshToken(
      newUser.username,
      await bcrypt.hash(refreshToken, 10),
    );
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async validateUser(
    username: string,
    passport: string,
  ): Promise<Partial<User>> {
    const user = await this.userService.findUserByUsername(username);
    if (user && (await bcrypt.compare(passport, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Partial<User>) {
    const payload = {
      username: user.username,
      sub: user.id,
      roles: user.roles,
    };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_SECRET,
      expiresIn: process.env.REFRESH_EXPIRES_IN,
    });
    await this.userService.updateRefreshToken(
      user.username,
      await bcrypt.hash(refreshToken, 10),
    );
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_SECRET,
      });
      const user = await this.userService.findUserByUsername(payload.username);
      if (!user || !(await bcrypt.compare(refreshToken, user.refreshToken))) {
        throw new UnauthorizedException('Invalid refresh token');
      }
      const newPayload = {
        username: user.username,
        sub: user.id,
        roles: user.roles,
      };
      const accessToken = this.jwtService.sign(newPayload);
      const newRefreshToken = this.jwtService.sign(newPayload, {
        secret: process.env.REFRESH_SECRET,
        expiresIn: process.env.REFRESH_EXPIRES_IN,
      });
      await this.userService.updateRefreshToken(
        user.username,
        await bcrypt.hash(newRefreshToken, 10),
      );

      return {
        access_token: accessToken,
        refresh_token: newRefreshToken,
      };
    } catch (err) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(username: string) {
    await this.userService.updateRefreshToken(username, null);
  }
}
