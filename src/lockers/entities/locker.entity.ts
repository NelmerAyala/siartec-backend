import { BankAccount } from 'src/bank_accounts/entities/bank_account.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { LockersPointOfSale } from 'src/lockers_point_of_sales/entities/lockers_point_of_sale.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Locker {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_locker_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_locker_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_locker_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_locker_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Branch, (branch) => branch.id_branch_locker_fk)
  branch: Branch


  /* 
    Relationship
  */
  @OneToMany(() => Payment, (payment) => payment.locker)
  id_locker_payment_fk: Payment[]

  @OneToMany(() => LockersPointOfSale, (locker) => locker.locker)
  id_locker_point_of_sale_locker_fk: LockersPointOfSale[]


}