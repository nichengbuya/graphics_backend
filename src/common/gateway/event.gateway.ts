import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Server } from 'ws';
  import { Socket } from 'socket.io'
  
  @WebSocketGateway(8080,{namespace:'events'})
  export class EventsGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    onEvent(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ){
        // client.broadcast.emit('events',`callback${data}`)
        
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
  }
  