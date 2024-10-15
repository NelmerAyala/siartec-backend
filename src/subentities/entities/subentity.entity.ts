import { Entities } from 'src/entities/entities/entity.entity';
import { Parishes } from 'src/parishes/entities/parish.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
import { Status } from 'src/status/entities/status.entity';
import { TaxStamp } from 'src/tax_stamps/entities/tax_stamp.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Subentity {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_subentity_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_subentity_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_subentity_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_subentity_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Entities, (entity) => entity.id_subentity_entity_fk)
  entity: Entities

  /* 
    Relationship
  */
  @OneToMany(() => Procedure, procedure => procedure.subentity)
  id_procedure_subentity_fk: Procedure[];

}