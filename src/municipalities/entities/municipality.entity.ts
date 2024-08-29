import { Parishes } from 'src/parishes/entities/parish.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Municipalities {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_privilege_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_privilege_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_privilege_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_privilege_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */

  // @OneToMany(() => RolesPrivilege, role_privilege => role_privilege.privilege)
  // id_roles_privileges_privilege_fk: RolesPrivilege[];

  @OneToMany(() => Parishes, parish => parish.municipality)
  id_parish_municipality_fk: Parishes[];


}