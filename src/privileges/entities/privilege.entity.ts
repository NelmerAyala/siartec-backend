import { AuditableProcess } from 'src/auditable_processes/entities/auditable_process.entity';
import { RolesPrivilege } from 'src/roles_privileges/entities/roles_privilege.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Privilege {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_privilege_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_privilege_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_privilege_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_privilege_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */

  @OneToMany(() => RolesPrivilege, role_privilege => role_privilege.privilege)
  id_privilege_role_privilege_fk: RolesPrivilege[];

  @OneToMany(() => AuditableProcess, auditable_process => auditable_process.privilege)
  id_privilege_auditable_process_fk: AuditableProcess[];

}

