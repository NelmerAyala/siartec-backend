import { Audit } from 'src/audits/entities/audit.entity';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AuditableProcess {
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
  @ManyToOne(() => Privilege, (privilege) => privilege.id_privilege_auditable_process_fk)
  privilege: Privilege

  /* 
    Relationship
  */

  @OneToMany(() => Audit, audit => audit.auditable_process)
  id_auditable_process_audit_fk: Audit[];

}

