import { Entities } from 'src/entities/entities/entity.entity';
import { Locker } from 'src/lockers/entities/locker.entity';
import { Parishes } from 'src/parishes/entities/parish.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
import { Status } from 'src/status/entities/status.entity';
import { Subentity } from 'src/subentities/entities/subentity.entity';
import { TaxStampsPayment } from 'src/tax_stamps_payments/entities/tax_stamps_payment.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'numeric' })
  amount: number;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_payment_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_payment_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_payment_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_payment_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Locker, (locker) => locker.id_locker_payment_fk)
  locker: Locker

  /* 
    Relationship
  */
  // -- Payment
  @OneToMany(() => Transaction, (transaction) => transaction.payment)
  id_payment_transaction_fk: Transaction[]

  @OneToMany(() => TaxStampsPayment, (tax_stamp_payment) => tax_stamp_payment.payment)
  id_payment_tax_stamp_payment_fk: TaxStampsPayment[]

}