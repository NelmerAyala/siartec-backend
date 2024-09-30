import { Bank } from 'src/banks/entities/bank.entity';
import { PointOfSale } from 'src/point_of_sales/entities/point_of_sale.entity';
import { Status } from 'src/status/entities/status.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'int' })
  account_number: number;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_bank_account_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_bank_account_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_bank_account_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_bank_account_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Bank, (bank) => bank.id_bank_bank_account_fk)
  bank: Bank

  /* 
    Relationship
  */
  @OneToMany(() => Transaction, (transaction) => transaction.bank_account)
  id_bank_account_transaction_fk: Transaction[]

  @OneToMany(() => PointOfSale, (point_of_sale) => point_of_sale.bank_account)
  id_bank_account_point_of_sale_fk: PointOfSale[]

}