import { AuditableProcess } from 'src/auditable_processes/entities/auditable_process.entity';
import { BankAccount } from 'src/bank_accounts/entities/bank_account.entity';
import { Bank } from 'src/banks/entities/bank.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { ContributorsType } from 'src/contributors_types/entities/contributors_type.entity';
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
import { Subentity } from 'src/subentities/entities/subentity.entity';
import { TaxStamp } from 'src/tax_stamps/entities/tax_stamp.entity';
import { TaxStampsPayment } from 'src/tax_stamps_payments/entities/tax_stamps_payment.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { TransactionsType } from 'src/transactions_types/entities/transactions_type.entity';
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

  // -- Municipality
  @OneToMany(() => Municipalities, (municipality) => municipality.status)
  id_status_municipality_fk: Municipalities[]

  // -- Entity
  @OneToMany(() => Entities, (entity) => entity.status)
  id_status_entity_fk: Entities[]

  // -- Subentity
  @OneToMany(() => Subentity, (subentity) => subentity.status)
  id_status_subentity_fk: Subentity[]

  // -- Procedure
  @OneToMany(() => Procedure, (procedure) => procedure.status)
  id_status_procedure_fk: Procedure[]

  // -- Tax Stamp
  @OneToMany(() => TaxStamp, (tax_stamp) => tax_stamp.status)
  id_status_tax_stamp_fk: TaxStamp[]

  // -- Bank
  @OneToMany(() => Bank, (bank) => bank.status)
  id_status_bank_fk: Bank[]

  // -- Bank Account
  @OneToMany(() => BankAccount, (bank_account) => bank_account.status)
  id_status_bank_account_fk: BankAccount[]

  // -- Transaction Type
  @OneToMany(() => TransactionsType, (transaction_type) => transaction_type.status)
  id_status_transaction_type_fk: TransactionsType[]

  // -- Transaction
  @OneToMany(() => Transaction, (transaction) => transaction.status)
  id_status_transaction_fk: Transaction[]

  // -- Payment
  @OneToMany(() => Payment, (payment) => payment.status)
  id_status_payment_fk: Payment[]

  // -- Locker
  @OneToMany(() => Locker, (locker) => locker.status)
  id_status_locker_fk: Locker[]

  // -- Branch
  @OneToMany(() => Branch, (branch) => branch.status)
  id_status_branch_fk: Branch[]

  // -- Tax Stamp-Payment
  @OneToMany(() => TaxStampsPayment, (tax_stamp_payment) => tax_stamp_payment.status)
  id_status_tax_stamp_payment_fk: TaxStampsPayment[]

  // -- Point Of Sale
  @OneToMany(() => PointOfSale, (point_of_sale) => point_of_sale.status)
  id_status_point_of_sale_fk: PointOfSale[]

  // -- Locker Point Of Sale
  @OneToMany(() => LockersPointOfSale, (locker_point_of_sale) => locker_point_of_sale.status)
  id_status_locker_point_of_sale_fk: LockersPointOfSale[]


}
