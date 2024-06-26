import { Role } from 'src/roles/entities/role.entity';
import { Status } from 'src/status/entities/status.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  firstname: string;

  @Column({ type: 'varchar', length: 30 })
  lastname: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'char' })
  identity_document_letter: string;

  @Column({ type: 'varchar', length: 12 })
  identity_document: string;

  // natural contributors 
  @Column({ type: 'date', nullable: true })
  birthdate: string;

  // legal contributors
  @Column({ type: 'date', nullable: true })
  constitution_date: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 15 })
  phone_number: string;

  @Column({ type: 'timestamptz', nullable: true })
  last_connection: Date;


  /* 
    Table audit columns 
  */
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;


  /*
    Table audit columns foreign keys   
  */
  @ManyToOne(() => Status, (statu) => statu.id_status_user_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_user_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_user_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_user_fk)
  deleted_by: Users


  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => Role, (rol) => rol.id_roles_user_fk)
  id_role: Role

  // @ManyToOne(() => ContributorsType, (type) => type.users)
  // id_contributor_type: ContributorsTypes

  // @ManyToOne(() => Municipalities, (municipality) => municipality.users)
  // id_municipality: Municipalities


  /* 
    Relationship
  */
  // -- Users
  @OneToMany(() => Users, (user) => user.created_by)
  create_by_user_fk: Users[]
  @OneToMany(() => Users, (user) => user.updated_by)
  updated_by_user_fk: Users[]
  @OneToMany(() => Users, (user) => user.deleted_by)
  deleted_by_user_fk: Users[]

  // -- Roles
  @OneToMany(() => Users, (user) => user.created_by)
  create_by_role_fk: Users[]
  @OneToMany(() => Users, (user) => user.updated_by)
  updated_by_role_fk: Users[]
  @OneToMany(() => Users, (user) => user.deleted_by)
  deleted_by_role_fk: Users[]

}
