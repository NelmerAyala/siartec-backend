// import { Role } from 'src/roles/entities/role.entity';
import { Municipalities } from 'src/municipalities/entities/municipality.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Parishes {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_parish_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_parish_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_parish_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_parish_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Municipalities, (municipality) => municipality.id_parish_municipality_fk)
  municipality: Municipalities

  /* 
    Relationship
  */
  @OneToMany(() => Users, user => user.parish)
  id_parish_user_fk: Users[];

}