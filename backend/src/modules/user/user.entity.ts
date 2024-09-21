import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Roles } from 'src/common/enum/role.enum';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends AbstractEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken?: string;

  @Column({ nullable: true })
  code?: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ type: 'enum', enum: Roles, array: true, default: [Roles.TRIAL] })
  roles: Roles[];
}
