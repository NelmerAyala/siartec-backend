
import { Coin } from 'src/coins/entities/coin.entity';
import { Status } from 'src/status/entities/status.entity';
import { TaxStamp } from 'src/tax_stamps/entities/tax_stamp.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class CalculationFactor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric' })
  amount: number;

  @Column({ type: 'date' })
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
  @ManyToOne(() => Status, (statu) => statu.id_status_calculation_factor_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_calculation_factor_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_calculation_factor_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_calculation_factor_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Coin, (coin) => coin.id_calculation_factor_coin_fk)
  coin: Coin

  /* 
    Relationship
  */
  @OneToMany(() => TaxStamp, tax_stamp => tax_stamp.calculation_factor)
  id_tax_stamp_calculation_factor_fk: TaxStamp[];
    

}