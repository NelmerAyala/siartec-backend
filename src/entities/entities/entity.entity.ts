import { Parishes } from 'src/parishes/entities/parish.entity';
import { Status } from 'src/status/entities/status.entity';
import { Subentity } from 'src/subentities/entities/subentity.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Entities {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_entity_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_entity_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_entity_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_entity_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */

  // @OneToMany(() => RolesPrivilege, role_privilege => role_privilege.privilege)
  // id_roles_privileges_privilege_fk: RolesPrivilege[];

  @OneToMany(() => Subentity, subentity => subentity.entity)
  id_subentity_entity_fk: Subentity[];


}