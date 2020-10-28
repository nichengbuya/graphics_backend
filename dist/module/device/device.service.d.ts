import { Device } from './device.interface';
import { Model } from 'mongoose';
export declare class DeviceService {
    private readonly deviceModel;
    constructor(deviceModel: Model<Device>);
    getDeviceType(): {
        id: number;
        value: string;
    }[];
    initDeviceList(): Promise<void>;
    getDeviceList(type: any): Promise<any>;
}
