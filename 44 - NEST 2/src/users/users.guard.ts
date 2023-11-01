import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(
    private jwtService: JwtService
  ){}

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async canActivate(
    context: ExecutionContext,  
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if(!token) throw new UnauthorizedException('Token invalid');
    try {
      const payload = await this.jwtService.verify(token, {secret: '1234'});
      request.user = payload;
      // request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
    return true;
  }
}
