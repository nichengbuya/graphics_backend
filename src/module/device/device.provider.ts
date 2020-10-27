import {Connection} from 'mongoose';
import { DeviceSchema } from './device.schema';
export const deviceProvider = [
    {
        provide:'DeviceModelToken',
        useFactory:(connection:Connection)=>connection.model('Device',DeviceSchema),
        inject:['DbConnectionToken'],
    }
]
