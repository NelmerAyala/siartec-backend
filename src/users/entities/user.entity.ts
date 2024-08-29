import { AuditableProcess } from 'src/auditable_processes/entities/auditable_process.entity';
import { Audit } from 'src/audits/entities/audit.entity';
import { AuditsDetail } from 'src/audits_details/entities/audits_detail.entity';
import { ContributorsType } from 'src/contributors_types/entities/contributors_type.entity';
import { Municipalities } from 'src/municipalities/entities/municipality.entity';
import { Parishes } from 'src/parishes/entities/parish.entity';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Role } from 'src/roles/entities/role.entity';
import { RolesPrivilege } from 'src/roles_privileges/entities/roles_privilege.entity';
import { Status } from 'src/status/entities/status.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  firstname: string;

  @Column({ type: 'varchar', length: 30 })
  lastname: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'char' })
  identity_document_letter: string;

  @Column({ type: 'varchar', length: 12 })
  identity_document: string;

  // natural contributors
  @Column({ type: 'date', nullable: true })
  birthdate: string;

  // legal contributors
  @Column({ type: 'date', nullable: true })
  constitution_date: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 15 })
  phone_number: string;

  @Column({ type: 'timestamptz', nullable: true })
  last_connection: Date;

  // @Column({ type: 'boolean', default: false })
  // personal_signature: Boolean;


  /* 
    Table audit columns 
  */
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;


  /*
    Table audit columns foreign keys   
  */
  @ManyToOne(() => Status, (statu) => statu.id_status_user_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_user_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_user_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_user_fk)
  deleted_by: Users


  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Role, (rol) => rol.id_roles_user_fk)
  role: Role

  @ManyToOne(() => ContributorsType, (type) => type.id_contributor_type_user_fk)
  contributor_type: ContributorsType

  @ManyToOne(() => Parishes, (parish) => parish.id_parish_user_fk)
  parish: Parishes


  /* 
    Relationship
  */
  // -- Users
  @OneToMany(() => Users, (user) => user.created_by)
  create_by_user_fk: Users[]
  @OneToMany(() => Users, (user) => user.updated_by)
  updated_by_user_fk: Users[]
  @OneToMany(() => Users, (user) => user.deleted_by)
  deleted_by_user_fk: Users[]

  // -- Roles
  @OneToMany(() => Users, (user) => user.created_by)
  create_by_role_fk: Users[]
  @OneToMany(() => Users, (user) => user.updated_by)
  updated_by_role_fk: Users[]
  @OneToMany(() => Users, (user) => user.deleted_by)
  deleted_by_role_fk: Users[]

  // -- Status
  @OneToMany(() => Users, (user) => user.created_by)
  create_by_status_fk: Users[]
  @OneToMany(() => Users, (user) => user.updated_by)
  updated_by_status_fk: Users[]
  @OneToMany(() => Users, (user) => user.deleted_by)
  deleted_by_status_fk: Users[]

  // -- Contributors Types
  @OneToMany(() => Users, (user) => user.created_by)
  create_by_contributors_types_fk: Users[]
  @OneToMany(() => Users, (user) => user.updated_by)
  updated_by_contributors_types_fk: Users[]
  @OneToMany(() => Users, (user) => user.deleted_by)
  deleted_by_contributors_types_fk: Users[]

  // -- Privileges
  @OneToMany(() => Privilege, (privilege) => privilege.created_by)
  create_by_privilege_fk: Privilege[]
  @OneToMany(() => Privilege, (privilege) => privilege.updated_by)
  updated_by_privilege_fk: Privilege[]
  @OneToMany(() => Privilege, (privilege) => privilege.deleted_by)
  deleted_by_privilege_fk: Privilege[]

  // -- Roles Privileges
  @OneToMany(() => RolesPrivilege, (role_privilege) => role_privilege.created_by)
  create_by_role_privilege_fk: RolesPrivilege[]
  @OneToMany(() => RolesPrivilege, (role_privilege) => role_privilege.updated_by)
  updated_by_role_privilege_fk: RolesPrivilege[]
  @OneToMany(() => RolesPrivilege, (role_privilege) => role_privilege.deleted_by)
  deleted_by_role_privilege_fk: RolesPrivilege[]

  // -- Auditables Processes
  @OneToMany(() => AuditableProcess, (audit_process) => audit_process.created_by)
  create_by_auditable_process_fk: AuditableProcess[]
  @OneToMany(() => AuditableProcess, (audit_process) => audit_process.updated_by)
  updated_by_auditable_process_fk: AuditableProcess[]
  @OneToMany(() => AuditableProcess, (audit_process) => audit_process.deleted_by)
  deleted_by_auditable_process_fk: AuditableProcess[]

  // -- Audit
  @OneToMany(() => Audit, (audit) => audit.created_by)
  create_by_audit_fk: Audit[]
  @OneToMany(() => Audit, (audit) => audit.updated_by)
  updated_by_audit_fk: Audit[]
  @OneToMany(() => Audit, (audit) => audit.deleted_by)
  deleted_by_audit_fk: Audit[]

  // -- Audits Detail
  @OneToMany(() => AuditsDetail, (audits_detail) => audits_detail.created_by)
  create_by_audits_detail_fk: AuditsDetail[]
  @OneToMany(() => AuditsDetail, (audits_detail) => audits_detail.updated_by)
  updated_by_audits_detail_fk: AuditsDetail[]
  @OneToMany(() => AuditsDetail, (audits_detail) => audits_detail.deleted_by)
  deleted_by_audits_detail_fk: AuditsDetail[]

  // -- Parish
  @OneToMany(() => Parishes, (parish) => parish.created_by)
  create_by_parish_fk: Parishes[]
  @OneToMany(() => Parishes, (parish) => parish.updated_by)
  updated_by_parish_fk: Parishes[]
  @OneToMany(() => Parishes, (parish) => parish.deleted_by)
  deleted_by_parish_fk: Parishes[]

  // -- Parish
  @OneToMany(() => Municipalities, (municipality) => municipality.created_by)
  create_by_municipality_fk: Municipalities[]
  @OneToMany(() => Municipalities, (municipality) => municipality.updated_by)
  updated_by_municipality_fk: Municipalities[]
  @OneToMany(() => Municipalities, (municipality) => municipality.deleted_by)
  deleted_by_municipality_fk: Municipalities[]

}
