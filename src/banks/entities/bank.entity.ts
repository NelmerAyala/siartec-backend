import { BankAccount } from 'src/bank_accounts/entities/bank_account.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  code: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @Column({ type: 'varchar', length: 10, nullable: true})
  code_bank: string;

  @Column({ type: 'varchar',length: 150, nullable: true })
  description_bank: string;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_bank_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_bank_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_bank_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_bank_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */
  @OneToMany(() => BankAccount, (bank_account) => bank_account.bank)
  id_bank_bank_account_fk: BankAccount[]

}