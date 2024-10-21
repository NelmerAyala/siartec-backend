import { BankAccount } from 'src/bank_accounts/entities/bank_account.entity';
import { ExternalRequest } from 'src/external_requests/entities/external_request.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Status } from 'src/status/entities/status.entity';
import { TransactionsType } from 'src/transactions_types/entities/transactions_type.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  reference: string;

  @Column({ type: 'numeric' })
  amount: number;

  @Column({ type: 'timestamp with time zone' })
  date: string;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_transaction_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_transaction_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_transaction_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_transaction_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => TransactionsType, (transaction_type) => transaction_type.id_transaction_type_transaction_fk)
  transaction_type: TransactionsType

  @ManyToOne(() => BankAccount, (bank_account) => bank_account.id_bank_account_transaction_fk)
  bank_account: BankAccount

  @ManyToOne(() => Payment, (payment) => payment.id_payment_transaction_fk)
  payment: Payment

  /* 
    Relationship
  */
    @OneToMany(() => ExternalRequest, request => request.transaction)
    id_transaction_external_request_fk: ExternalRequest[];
    

}