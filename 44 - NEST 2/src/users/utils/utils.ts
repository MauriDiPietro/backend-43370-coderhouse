import { hash, compare } from 'bcryptjs';
import { UserEntity } from '../entities/user.entity';

export const createHash = async (password: string) => await hash(password, 10);

export const isValidPassword = async(user: UserEntity, password: string) => await compare(password, user.password);