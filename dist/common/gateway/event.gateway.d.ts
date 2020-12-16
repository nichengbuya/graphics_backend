import { Observable } from 'rxjs';
import { Server } from 'ws';
import { Socket } from 'socket.io';
export declare class EventsGateway {
    server: Server;
    onEvent(data: string, client: Socket): Observable<{
        event: string;
        data: number;
    }>;
}
