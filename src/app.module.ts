import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
