import { DeviceService } from './device.service';
export declare class DeviceController {
    private readonly deviceService;
    constructor(deviceService: DeviceService);
    getDeviceType(): {
        id: number;
        value: string;
    }[];
    getDeviceList({ type }: {
        type: any;
    }): Promise<import("./device.interface").Device[]>;
}
