import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'enum', enum: ['all', 'stamps', 'payments'] })
  /*     
    all - all rows
    stamp - tax stamps 
    stamp - tax stamps 
  */
  apply_to: string;


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
  @ManyToOne(() => Status, (statu) => statu.id_status_status_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_status_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_status_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_status_fk)
  deleted_by: Users


  /* 
    Relationship
  */
  @OneToMany(() => Status, (statu) => statu.status)
  id_status_status_fk: Status[]
  @OneToMany(() => Users, (user) => user.status)
  id_status_user_fk: Users[]
  @OneToMany(() => Role, (role) => role.status)
  id_status_role_fk: Role[]

  // -- Contributors Types
  @OneToMany(() => Status, (statu) => statu.status)
  id_status_contributors_types_fk: Status[]

  // -- Contributors Types
  @OneToMany(() => Privilege, (privilege) => privilege.status)
  id_status_privilege_fk: Privilege[]

  // -- Roles Privileges
  @OneToMany(() => Privilege, (privilege) => privilege.status)
  id_status_role_privilege_fk: Privilege[]


}
