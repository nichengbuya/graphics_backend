import { Injectable, ParseUUIDPipe, Inject } from '@nestjs/common';
import { Device } from './device.interface';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
import { InjectModel } from '@nestjs/mongoose';
import { deviceJson } from 'src/common/data/device';
@Injectable()
export class DeviceService {
    constructor(
        @InjectModel('device') private readonly deviceModel: Model<Device>
    ) {
        this.initDeviceList();
    }
    getDeviceType() {
        let result = [
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
    async initDeviceList() {
        // const fileName = path.join(__dirname, '../../common/data', 'device.json');
        // console.log(fileName)
        // const fileContent: any = fs.readFileSync(fileName);
        // if (fileContent) {
            const json = deviceJson;
            const devices = await this.deviceModel.find().exec();
            //    const deviceMap = new Set(...devices);
            json.forEach(async d => {
                const devices = await this.deviceModel.find({ name: d.name }).exec();
                if (devices.length === 0) {
                    const createDevice = new this.deviceModel(d)
                    await createDevice.save();
                }
            });
        // }
    }
    async getDeviceList(type) {
        return await this.deviceModel.find({ type: type }).exec();
    }
    async getDevice(id){
        const device = await this.deviceModel.findOne({_id:id})
        return device;
    }
}
