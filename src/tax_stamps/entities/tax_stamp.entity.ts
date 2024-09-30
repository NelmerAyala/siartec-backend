import { Entities } from 'src/entities/entities/entity.entity';
import { Parishes } from 'src/parishes/entities/parish.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
import { Status } from 'src/status/entities/status.entity';
import { Subentity } from 'src/subentities/entities/subentity.entity';
import { TaxStampsPayment } from 'src/tax_stamps_payments/entities/tax_stamps_payment.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TaxStamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'numeric' })
  amount: number;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_tax_stamp_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_tax_stamp_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_tax_stamp_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_tax_stamp_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Users, (user) => user.id_tax_stamp_user_fk)
  user: Users

  @ManyToOne(() => Procedure, (procedure) => procedure.id_tax_stamp_procedure_fk)
  procedure: Procedure

  /* 
    Relationship
  */
  @OneToMany(() => TaxStampsPayment, (tax_stamp_payment) => tax_stamp_payment.tax_stamp)
  id_tax_stamp_tax_stamp_payment_fk: TaxStampsPayment[]

}