import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule, 
    // MongooseModule.forRoot('mongodb://localhost:27018/coderhouse-nest')
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(config: ConfigService) => ({
        uri: config.get('MONGO_URL')
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

