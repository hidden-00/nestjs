import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { LoginDto } from 'src/common/auth/dtos/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findUserByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }

  updateRefreshToken(
    username: string,
    refreshToken: string,
  ): Promise<UpdateResult> {
    return this.userRepository.update({ username }, { refreshToken });
  }

  createUser(userDto: LoginDto): Promise<User> {
    userDto.password = bcrypt.hashSync(userDto.password, 10);
    return this.userRepository.save(
      this.userRepository.create({
        username: userDto.username,
        password: userDto.password,
      }),
    );
  }
}
