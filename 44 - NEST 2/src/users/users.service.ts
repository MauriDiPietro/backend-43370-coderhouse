import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schema/user.schema';
import { UserEntity } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createHash, isValidPassword } from './utils/utils';
import {UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import UserInterface from './interface/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel:Model<UserDocument>,
    private jwtService: JwtService
    ){}

  async register(User: UserEntity) {
    const { email, password } = User;
    const existUser = await this.findByEmail(email);
    if(!existUser) return await this.userModel.create({
      ...User,
      password: await createHash(password)
    });
    else return false;
  }

  findAll() {
    return this.userModel.find({});
  }

  generateToken(user: UserInterface) {
    const payload = {
      // userId: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role
    };
    return this.jwtService.sign(payload);
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    if(user) return user;
    else return false;
  }

  async login(User: UserEntity) {
    const { email, password } = User;
    const existUser = await this.findByEmail(email);
    if(!existUser) throw new UnauthorizedException('Invalid Credentials');
    const passValid = await isValidPassword(existUser, password);
    if(!passValid) throw new UnauthorizedException('Invalid Credentials');
    return this.generateToken(existUser);
  }

  
  profile(req) {
    return req.user;
  }
 
}
