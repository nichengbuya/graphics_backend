import { DeviceService } from './device.service';
export declare class DeviceController {
    private readonly deviceService;
    constructor(deviceService: DeviceService);
    fetch(): {
        id: number;
        value: string;
    }[];
    getDeviceList({}: {}): Promise<any>;
}
