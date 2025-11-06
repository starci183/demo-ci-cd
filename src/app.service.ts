import { Injectable } from '@nestjs/common';
import config from './config';

@Injectable()
export class AppService {
  getHello() {
    return `Hello anh Cuong ${config().appSecret}`
  }
}
