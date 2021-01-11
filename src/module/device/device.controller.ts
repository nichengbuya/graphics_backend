import { Controller, Get, Query } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
    constructor(private readonly deviceService:DeviceService){}
    @Get('getdevicetype')
    getDeviceType(){
        return this.deviceService.getDeviceType();
    }

    @Get('getdevicelist')
    getDeviceList(@Query(){type}){
        return this.deviceService.getDeviceList(type);
    }
}
