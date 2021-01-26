import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { DeviceService } from './device.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('device')
@UseGuards(AuthGuard('jwt'))
export class DeviceController {
    constructor(private readonly deviceService:DeviceService){}
    @Get('getdevicetype')
    getDeviceType(){
        return this.deviceService.getDeviceType();
    }

    @Get('getdevicelist')
    getDeviceList(@Query() {type}){
        return this.deviceService.getDeviceList(type);
    }
    
    @Get('getDevice')
    getDevice(@Query() {id}){
        return this.deviceService.getDevice(id);
    }

}
