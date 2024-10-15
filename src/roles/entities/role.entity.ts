import { ContributorsType } from 'src/contributors_types/entities/contributors_type.entity';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { RolesPrivilege } from 'src/roles_privileges/entities/roles_privilege.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'varchar' })
  description: string;

  /* 
    Table audit columns 
  */
  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  deleted_at: string;

  /* 
    Table audit columns foreign keys 
  */
  @ManyToOne(() => Status, (statu) => statu.id_status_role_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_role_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_role_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_role_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */

  /* 
    Relationship
  */
  @OneToMany(() => Users, (user) => user.role)
  id_roles_user_fk: Users[];

  @OneToMany(() => RolesPrivilege, role_privilege => role_privilege.role)
  id_roles_privileges_role_fk: RolesPrivilege[];

  @OneToMany(() => ContributorsType, contributor => contributor.role)
  id_roles_contributor_type_fk: ContributorsType[];

}