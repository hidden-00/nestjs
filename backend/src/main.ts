import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ExpressApp from './config/app.config';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  const server = app.getHttpAdapter().getInstance();
  server.use(ExpressApp);

  await app.listen(3000);
}
bootstrap();
