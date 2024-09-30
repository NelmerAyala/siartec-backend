import { BankAccount } from 'src/bank_accounts/entities/bank_account.entity';
import { Locker } from 'src/lockers/entities/locker.entity';
import { PointOfSale } from 'src/point_of_sales/entities/point_of_sale.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class LockersPointOfSale {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_locker_point_of_sale_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_locker_point_of_sale_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_locker_point_of_sale_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_locker_point_of_sale_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Locker, (locker) => locker.id_locker_point_of_sale_locker_fk)
  locker: Locker

  @ManyToOne(() => PointOfSale, (locker) => locker.id_point_of_sale_point_of_sale_locker_fk)
  point_of_sale: PointOfSale

  /* 
    Relationship
  */


}