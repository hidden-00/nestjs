import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        refreshToken: {
          type: 'string',
          format: 'string',
          description: 'Refresh token',
          example: 'refresh_token',
        },
      },
    },
  })
  @Post('refresh')
  async refreshTokens(@Body('refresh_token') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          format: 'string',
          description: 'Username',
          example: 'admin',
        },
      },
    },
  })
  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  async logout(@Body() username: string) {
    await this.authService.logout(username);
    return { message: 'Logout successful' };
  }

  @Post('register')
  async register(@Body() loginDto: LoginDto) {
    return this.authService.register(loginDto);
  }
}
