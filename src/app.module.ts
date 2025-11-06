import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BullModule } from '@nestjs/bullmq'
// import { AudioConsumer } from './audio.consumer';
// import { WsGateway } from './ws.gateway';
//import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    // BullModule.forRoot({
    //   connection: {
    //     host: 'localhost',
    //     port: 6379,
    //     password: "Cuong123_A"
    //   },
    // }),
    // ScheduleModule.forRoot(),
    // BullModule.registerQueue({
    //   name: 'audio',
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: ['.env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
