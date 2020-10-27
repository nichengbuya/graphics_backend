import { Injectable, ParseUUIDPipe, Inject } from '@nestjs/common';
import { Device } from './device.interface';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class DeviceService {
    constructor(@Inject('DeviceModelToken') private readonly deviceModel: Model<Device>) {
        this.initDeviceList();
    }
    getDeviceType() {
        let result =[
                {
                    id: 1,
                    value: 'robot',
                },
                {
                    id: 2,
                    value: 'gripper',
                },
                {
                    id: 3,
                    value: 'geometry',
                }

            ]

        return result;
    }
    async initDeviceList(){
        const fileName=path.join(__dirname,'../../data','device.json');
        const fileContent:any = fs.readFileSync(fileName);
        if(fileContent){
           const json = JSON.parse(fileContent);
           const devices = await this.deviceModel.find().exec();
           const deviceMap = new Set(...devices) 
           json.forEach(async d => {
               if(!deviceMap.has(d)){
                   const createDevice = new this.deviceModel(d)
                   await createDevice.save();
               }
           });
        }
    }
    async getDeviceList() {
        return await this.deviceModel.find().exec();
    }
}
