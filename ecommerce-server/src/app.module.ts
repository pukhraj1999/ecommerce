import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import googleOauthConfig from './auth/config/google-oauth.config';

@Module({
  imports: [AuthenticationModule,
    ConfigModule.forFeature(googleOauthConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
