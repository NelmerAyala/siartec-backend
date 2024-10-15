import { Role } from 'src/roles/entities/role.entity';
import { Status } from 'src/status/entities/status.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ContributorsType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'decimal' })
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
  @ManyToOne(() => Status, (statu) => statu.id_status_contributors_types_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_contributors_types_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_contributors_types_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_contributors_types_fk)
  deleted_by: Users


  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Role, (role) => role.id_roles_contributor_type_fk)
  role: Role


  /* 
    Relationship
  */
  @OneToMany(() => Status, (statu) => statu.status)
  id_contributor_type_status_fk: Status[]
  @OneToMany(() => Users, (user) => user.status)
  id_contributor_type_user_fk: Users[]


}