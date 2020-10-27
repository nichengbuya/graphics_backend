import { Controller, Get, Query } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
    constructor(private readonly deviceService:DeviceService){}
    @Get('getdevicetype')
    fetch(){
        return this.deviceService.getDeviceType();
    }

    @Get('getdevicelist')
    getDeviceList(@Query(){}){
        return this.deviceService.getDeviceList();
    }
}
