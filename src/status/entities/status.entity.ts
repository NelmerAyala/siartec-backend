import { AuditableProcess } from 'src/auditable_processes/entities/auditable_process.entity';
import { ContributorsType } from 'src/contributors_types/entities/contributors_type.entity';
import { Parishes } from 'src/parishes/entities/parish.entity';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Role } from 'src/roles/entities/role.entity';
import { RolesPrivilege } from 'src/roles_privileges/entities/roles_privilege.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'enum', enum: ['all', 'stamps', 'payments'] })
  /*     
    all - all rows
    stamp - tax stamps 
    stamp - tax stamps 
  */
  apply_to: string;


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
  @ManyToOne(() => Status, (statu) => statu.id_status_status_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_status_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_status_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_status_fk)
  deleted_by: Users


  /* 
    Relationship
  */
  @OneToMany(() => Status, (statu) => statu.status)
  id_status_status_fk: Status[]
  @OneToMany(() => Users, (user) => user.status)
  id_status_user_fk: Users[]
  @OneToMany(() => Role, (role) => role.status)
  id_status_role_fk: Role[]

  // -- Contributors Types
  @OneToMany(() => ContributorsType, (contributors_type) => contributors_type.status)
  id_status_contributors_types_fk: ContributorsType[]

  // -- Privileges
  @OneToMany(() => Privilege, (privilege) => privilege.status)
  id_status_privilege_fk: Privilege[]

  // -- Roles Privileges
  @OneToMany(() => RolesPrivilege, (roles_privilege) => roles_privilege.status)
  id_status_role_privilege_fk: RolesPrivilege[]

  // -- Auditables Processes
  @OneToMany(() => AuditableProcess, (auditable_process) => auditable_process.status)
  id_status_auditable_process_fk: AuditableProcess[]

  // -- Parish
  @OneToMany(() => Parishes, (parish) => parish.status)
  id_status_parish_fk: Parishes[]


}
