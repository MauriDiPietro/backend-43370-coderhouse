import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,  
        schema: UserSchema
      }
  ]),
  JwtModule.register({
    global: true, 
    secret: '1234',
    signOptions: { expiresIn: '15m' }
  })
],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

