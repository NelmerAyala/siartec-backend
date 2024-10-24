import { CalculationFactor } from 'src/calculation_factor/entities/calculation_factor.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Coin {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_coin_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_coin_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_coin_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_coin_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */
  @OneToMany(() => CalculationFactor, factor => factor.coin)
  id_calculation_factor_coin_fk: CalculationFactor[];

  
}