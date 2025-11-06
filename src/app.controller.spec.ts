import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config';

// trong tất cả source backend, mình đều có file test
describe('AppController', () => {
  let appController: AppController;

  // trước tất cả test case thì nó tạo ra app module
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        load: [config],
        envFilePath: ['.env'],
      })],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello anh Cuong demo');
    });
  });
});
