import { SetMetadata } from '@nestjs/common';
import { Roles } from '../enum/role.enum';

export const Role = (...roles: Roles[]) => SetMetadata('roles', roles);
