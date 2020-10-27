import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./users.entity").UsersEntity[]>;
    create(param: any): Promise<boolean>;
    createMany(users: any): Promise<boolean>;
}
