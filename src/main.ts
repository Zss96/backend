import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* 启动swagger */
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
