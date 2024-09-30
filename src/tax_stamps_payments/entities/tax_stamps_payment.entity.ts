import { BankAccount } from 'src/bank_accounts/entities/bank_account.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Status } from 'src/status/entities/status.entity';
import { TaxStamp } from 'src/tax_stamps/entities/tax_stamp.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TaxStampsPayment {
  @PrimaryGeneratedColumn()
  id: number;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_tax_stamp_payment_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_tax_stamp_payment_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_tax_stamp_payment_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_tax_stamp_payment_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => TaxStamp, (tax_stamp) => tax_stamp.id_tax_stamp_tax_stamp_payment_fk)
  tax_stamp: TaxStamp

  @ManyToOne(() => Payment, (payment) => payment.id_payment_tax_stamp_payment_fk)
  payment: Payment


  /* 
    Relationship
  */
  // @OneToMany(() => Payment, (payment) => payment.locker)
  // id_locker_payment_fk: Payment[]

}