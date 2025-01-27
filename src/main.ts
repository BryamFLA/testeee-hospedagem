import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8080;
  await app.listen(port, () => {
    console.log('Hello world listening on port', port);
  });
}
void bootstrap();
