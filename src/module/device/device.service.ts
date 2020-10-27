import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { Message } from 'src/common/utils';

@Injectable()
export class DeviceService {
    getDeviceType() {
        let result: Message ={
            message:'success',
            statusCode:200,
            data: [
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

        }


        return result;
    }
    getDeviceList(id) {
        let result: Message ={
            message:'success',
            statusCode:200,
            data: [
                {
                    name: 'ur5',
                    id: '111',
                    url: 'static/robot/ur5_description/urdf/ur5.urdf',
                    img:'data:image/jpg;base64, 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AJ11Fcv4A/5FWL/rq/8AOuooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDyr4tf8hHTP8Ari/8xXBWf367D4m3cl74jMKITFYxiNyB0ZgH5/ArXH2QJkAAySaAPU/CGpT2/h5IYwgAkc5I5610MWtzqw81Fdc844NeQvreo+HJkjjeM+Yu97eVfu8nHTkZqf8A4WYpBjntPIJU5ZV3jOeg59K6Ium42Z5FeGNjUcoO6/roe4W1xHdW6TRHKN09uxH51LXN+A70aj4NsrtWZlkaUgsME/vGH8xXSVg99D1YNuKctwooopFBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFU9Wu20/Rr69RQz29vJKoPQlVJ/pVykZQylWAKkYII60Az55W9l1fVpr1r+Sy1i4wPtWcxSkAACRcYHAABHT0rM1HxN4r0m6ks7mSGGVDgvHAgP1BArf8AGPhK58N6jI6Rs+nSsTBKASFGfuMexH69fUDLa01DxjHBZWNs9zfwkJvH3VX1dugHB6+nFatJq6OGnOpCpyS1Ryf22VnlnnlZ5ZDlmc5JNVGuvPcheQOpr06D4SS2cLJrcF5cSsRtmsG3xID1yu3eSD3/AE4zWhpfw2022uF87TtS1KTcWG9HgUnsG3ADHGfx56Vkdx13woH/ABQunq4cOiyEBm7NK5zj+p/Cu6rL0awms4MziOM7QkdvD9yFB0A9T6mtSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooARkV1KuoZT1BGQahtLO1sIBBZ20NvCCSI4YwignrwOKKKAJ6KKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9k='
                }
            ]

        }

        return result
    }
}
