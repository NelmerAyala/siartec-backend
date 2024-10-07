import { AuditableProcess } from 'src/auditable_processes/entities/auditable_process.entity';
import { Audit } from 'src/audits/entities/audit.entity';
import { AuditsDetail } from 'src/audits_details/entities/audits_detail.entity';
import { BankAccount } from 'src/bank_accounts/entities/bank_account.entity';
import { Bank } from 'src/banks/entities/bank.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { ContributorsType } from 'src/contributors_types/entities/contributors_type.entity';
import { Country } from 'src/country/entities/country.entity';
import { Entities } from 'src/entities/entities/entity.entity';
import { Locker } from 'src/lockers/entities/locker.entity';
import { LockersPointOfSale } from 'src/lockers_point_of_sales/entities/lockers_point_of_sale.entity';
import { Municipalities } from 'src/municipalities/entities/municipality.entity';
import { Parishes } from 'src/parishes/entities/parish.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { PointOfSale } from 'src/point_of_sales/entities/point_of_sale.entity';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
import { Role } from 'src/roles/entities/role.entity';
import { RolesPrivilege } from 'src/roles_privileges/entities/roles_privilege.entity';
import { State } from 'src/states/entities/state.entity';
import { Status } from 'src/status/entities/status.entity';
import { Subentity } from 'src/subentities/entities/subentity.entity';
import { TaxStamp } from 'src/tax_stamps/entities/tax_stamp.entity';
import { TaxStampsPayment } from 'src/tax_stamps_payments/entities/tax_stamps_payment.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { TransactionsType } from 'src/transactions_types/entities/transactions_type.entity';
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

  // -- Municipality
  @OneToMany(() => Municipalities, (municipality) => municipality.created_by)
  create_by_municipality_fk: Municipalities[]
  @OneToMany(() => Municipalities, (municipality) => municipality.updated_by)
  updated_by_municipality_fk: Municipalities[]
  @OneToMany(() => Municipalities, (municipality) => municipality.deleted_by)
  deleted_by_municipality_fk: Municipalities[]

  // -- Entity
  @OneToMany(() => Entities, (entity) => entity.created_by)
  create_by_entity_fk: Entities[]
  @OneToMany(() => Entities, (entity) => entity.updated_by)
  updated_by_entity_fk: Entities[]
  @OneToMany(() => Entities, (entity) => entity.deleted_by)
  deleted_by_entity_fk: Entities[]

  // -- SubEntity
  @OneToMany(() => Subentity, (subentity) => subentity.created_by)
  create_by_subentity_fk: Subentity[]
  @OneToMany(() => Subentity, (subentity) => subentity.updated_by)
  updated_by_subentity_fk: Subentity[]
  @OneToMany(() => Subentity, (subentity) => subentity.deleted_by)
  deleted_by_subentity_fk: Subentity[]

  // -- Procedure
  @OneToMany(() => Procedure, (procedure) => procedure.created_by)
  create_by_procedure_fk: Procedure[]
  @OneToMany(() => Procedure, (procedure) => procedure.updated_by)
  updated_by_procedure_fk: Procedure[]
  @OneToMany(() => Procedure, (procedure) => procedure.deleted_by)
  deleted_by_procedure_fk: Procedure[]

  // -- Tax Stamp
  @OneToMany(() => TaxStamp, (tax_stamp) => tax_stamp.created_by)
  create_by_tax_stamp_fk: TaxStamp[]
  @OneToMany(() => TaxStamp, (tax_stamp) => tax_stamp.updated_by)
  updated_by_tax_stamp_fk: TaxStamp[]
  @OneToMany(() => TaxStamp, (tax_stamp) => tax_stamp.deleted_by)
  deleted_by_tax_stamp_fk: TaxStamp[]
  @OneToMany(() => TaxStamp, (tax_stamp) => tax_stamp.deleted_by)
  id_tax_stamp_user_fk: TaxStamp[]

  // -- Bank
  @OneToMany(() => Bank, (bank) => bank.created_by)
  create_by_bank_fk: Bank[]
  @OneToMany(() => Bank, (bank) => bank.updated_by)
  updated_by_bank_fk: Bank[]
  @OneToMany(() => Bank, (bank) => bank.deleted_by)
  deleted_by_bank_fk: Bank[]

  // -- Bank Account
  @OneToMany(() => BankAccount, (bank_account) => bank_account.created_by)
  create_by_bank_account_fk: BankAccount[]
  @OneToMany(() => BankAccount, (bank_account) => bank_account.updated_by)
  updated_by_bank_account_fk: BankAccount[]
  @OneToMany(() => BankAccount, (bank_account) => bank_account.deleted_by)
  deleted_by_bank_account_fk: BankAccount[]

  // -- Transaction Type
  @OneToMany(() => TransactionsType, (transaction_type) => transaction_type.created_by)
  create_by_transaction_type_fk: TransactionsType[]
  @OneToMany(() => TransactionsType, (transaction_type) => transaction_type.updated_by)
  updated_by_transaction_type_fk: TransactionsType[]
  @OneToMany(() => TransactionsType, (transaction_type) => transaction_type.deleted_by)
  deleted_by_transaction_type_fk: TransactionsType[]

  // -- Transaction
  @OneToMany(() => Transaction, (transaction) => transaction.created_by)
  create_by_transaction_fk: Transaction[]
  @OneToMany(() => Transaction, (transaction) => transaction.updated_by)
  updated_by_transaction_fk: Transaction[]
  @OneToMany(() => Transaction, (transaction) => transaction.deleted_by)
  deleted_by_transaction_fk: Transaction[]

  // -- Payment
  @OneToMany(() => Payment, (payment) => payment.created_by)
  create_by_payment_fk: Payment[]
  @OneToMany(() => Payment, (payment) => payment.updated_by)
  updated_by_payment_fk: Payment[]
  @OneToMany(() => Payment, (payment) => payment.deleted_by)
  deleted_by_payment_fk: Payment[]

  // -- Locker
  @OneToMany(() => Locker, (locker) => locker.created_by)
  create_by_locker_fk: Locker[]
  @OneToMany(() => Locker, (locker) => locker.updated_by)
  updated_by_locker_fk: Locker[]
  @OneToMany(() => Locker, (locker) => locker.deleted_by)
  deleted_by_locker_fk: Locker[]

  // -- Branch
  @OneToMany(() => Branch, (branch) => branch.created_by)
  create_by_branch_fk: Branch[]
  @OneToMany(() => Branch, (branch) => branch.updated_by)
  updated_by_branch_fk: Branch[]
  @OneToMany(() => Branch, (branch) => branch.deleted_by)
  deleted_by_branch_fk: Branch[]

  // -- Tax Stamp Payment
  @OneToMany(() => TaxStampsPayment, (tax_stamp_payment) => tax_stamp_payment.created_by)
  create_by_tax_stamp_payment_fk: TaxStampsPayment[]
  @OneToMany(() => TaxStampsPayment, (tax_stamp_payment) => tax_stamp_payment.updated_by)
  updated_by_tax_stamp_payment_fk: TaxStampsPayment[]
  @OneToMany(() => TaxStampsPayment, (tax_stamp_payment) => tax_stamp_payment.deleted_by)
  deleted_by_tax_stamp_payment_fk: TaxStampsPayment[]

  // -- Tax Stamp Payment
  @OneToMany(() => PointOfSale, (point_of_sale) => point_of_sale.created_by)
  create_by_point_of_sale_fk: PointOfSale[]
  @OneToMany(() => PointOfSale, (point_of_sale) => point_of_sale.updated_by)
  updated_by_point_of_sale_fk: PointOfSale[]
  @OneToMany(() => PointOfSale, (point_of_sale) => point_of_sale.deleted_by)
  deleted_by_point_of_sale_fk: PointOfSale[]

  // -- Locker Point of Sales 
  @OneToMany(() => LockersPointOfSale, (locker_point_of_sale) => locker_point_of_sale.created_by)
  create_by_locker_point_of_sale_fk: LockersPointOfSale[]
  @OneToMany(() => LockersPointOfSale, (locker_point_of_sale) => locker_point_of_sale.updated_by)
  updated_by_locker_point_of_sale_fk: LockersPointOfSale[]
  @OneToMany(() => LockersPointOfSale, (locker_point_of_sale) => locker_point_of_sale.deleted_by)
  deleted_by_locker_point_of_sale_fk: LockersPointOfSale[]

  // -- States
  @OneToMany(() => State, (state) => state.created_by)
  create_by_states_fk: State[]
  @OneToMany(() => State, (state) => state.updated_by)
  updated_by_states_fk: State[]
  @OneToMany(() => State, (state) => state.deleted_by)
  deleted_by_states_fk: State[]

  // -- Country
  @OneToMany(() => Country, (country) => country.created_by)
  create_by_country_fk: Country[]
  @OneToMany(() => Country, (country) => country.updated_by)
  updated_by_country_fk: Country[]
  @OneToMany(() => Country, (country) => country.deleted_by)
  deleted_by_country_fk: Country[]

}
