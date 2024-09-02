import { AuditableProcess } from 'src/auditable_processes/entities/auditable_process.entity';
import { Audit } from 'src/audits/entities/audit.entity';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AuditsDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  recordId: number;

  @Column({ type: 'varchar' })
  at_table: string;

  @Column({ type: 'varchar' })
  at_column: string;

  @Column({ type: 'varchar' })
  old_value: string;

  @Column({ type: 'varchar' })
  new_value: string;

  @Column({ type: 'varchar' })
  data_type: string;

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
  @ManyToOne(() => Audit, (audit) => audit.id_audit_audit_detail_fk)
  audit: Audit

  /* 
    Relationship
  */

  // @OneToMany(() => RolesPrivilege, role_privilege => role_privilege.privilege)
  // id_roles_privileges_privilege_fk: RolesPrivilege[];

}

