import { Cron } from '@nestjs/schedule';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ transports: ['websocket', 'polling'] })
export class WsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('hello')
  handleHello(client: Socket): void {
    console.log(`I received a message from the client ${client.id}`);
    // tức là anh trả về cho nó 1 message ở event name là hello_return
    client.emit('hello_return', 'Hello from the server');
  }
  // every 5s, gửi 1 câu chào tới toàn thể client
  @Cron('*/5 * * * * *')
  handleCron(): void {
    this.server.emit('hello_return', {
      message: 'Hello from the server',
      timestamp: Date.now(),
    });
  }
}

export interface HelloResponse {
  message: string;
  timestamp: number;
}