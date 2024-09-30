import { BankAccount } from 'src/bank_accounts/entities/bank_account.entity';
import { LockersPointOfSale } from 'src/lockers_point_of_sales/entities/lockers_point_of_sale.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class PointOfSale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar', length: 50 })
  serial: string;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_point_of_sale_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_point_of_sale_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_point_of_sale_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_point_of_sale_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => BankAccount, (bank_account) => bank_account.id_bank_account_point_of_sale_fk)
  bank_account: BankAccount

  /* 
    Relationship
  */
  @OneToMany(() => BankAccount, (bank_account) => bank_account.bank)
  id_bank_bank_account_fk: BankAccount[]

  @OneToMany(() => LockersPointOfSale, (locker_point_of_sale) => locker_point_of_sale.point_of_sale)
  id_point_of_sale_point_of_sale_locker_fk: LockersPointOfSale[]

}