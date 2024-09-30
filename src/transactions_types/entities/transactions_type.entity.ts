import { Status } from 'src/status/entities/status.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TransactionsType {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_transaction_type_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_transaction_type_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_transaction_type_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_transaction_type_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */
  @OneToMany(() => Transaction, (transaction) => transaction.transaction_type)
  id_transaction_type_transaction_fk: Transaction[]
}