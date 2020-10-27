import { Repository, Connection } from 'typeorm';
import { UsersEntity } from './users.entity';
export declare class UsersService {
    private readonly usersRepository;
    private connection;
    constructor(usersRepository: Repository<UsersEntity>, connection: Connection);
    findAll(): Promise<UsersEntity[]>;
    create(user: any): Promise<UsersEntity[]>;
    createMany(users: UsersEntity[]): Promise<void>;
}
