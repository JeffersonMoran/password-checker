import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UserController } from './controllers/user.controller';
import { BasicAuth } from './middlewares/basic-auth.middleware';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BasicAuth)
      .forRoutes('user');
  }
}