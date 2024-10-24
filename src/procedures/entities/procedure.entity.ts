import { Entities } from 'src/entities/entities/entity.entity';
import { Parishes } from 'src/parishes/entities/parish.entity';
import { Status } from 'src/status/entities/status.entity';
import { Subentity } from 'src/subentities/entities/subentity.entity';
import { TaxStamp } from 'src/tax_stamps/entities/tax_stamp.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Procedure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'bool', default: false })
  is_specific_value: boolean;

  @Column({ type: 'numeric', nullable: true })
  value: number;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_procedure_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_procedure_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_procedure_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_procedure_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Subentity, (subentity) => subentity.id_procedure_subentity_fk)
  subentity: Subentity

  /* 
    Relationship
  */
  @OneToMany(() => TaxStamp, (tax_stamp) => tax_stamp.procedure)
  id_tax_stamp_procedure_fk: TaxStamp[]

}