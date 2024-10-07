import { Municipalities } from 'src/municipalities/entities/municipality.entity';
import { Parishes } from 'src/parishes/entities/parish.entity';
import { State } from 'src/states/entities/state.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Country {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_country_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_country_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_country_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_country_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */
  @OneToMany(() => State, state => state.country)
  id_state_country_fk: State[];


}