import { RoleGuardService } from './role-guard.service';
export declare class RoleGuardController {
    private readonly roleGuardService;
    constructor(roleGuardService: RoleGuardService);
    fetch({ id }: {
        id: any;
    }): string;
}
