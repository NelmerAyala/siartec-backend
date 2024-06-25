import { Role } from 'src/roles/entities/role.entity';
import { Status } from 'src/status/entities/status.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  firstname: string;

  @Column({ type: 'varchar', length: 30 })
  lastname: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'char' })
  identity_document_letter: string;

  @Column({ type: 'varchar', length: 12 })
  identity_document: string;

  // natural contributors 
  @Column({ type: 'date' })
  birthdate: string;

  // legal contributors
  @Column({ type: 'date' })
  constitution_date: string;

  @Column({ type: 'tinytext' })
  address: string;

  @Column({ type: 'varchar', length: 15 })
  phone_number: string;

  @Column({ type: 'timestamptz' })
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
  id_status: Status

  @ManyToOne(() => User, (user) => user.create_by_user_fk)
  created_by: User

  @ManyToOne(() => User, (user) => user.updated_by_user_fk)
  updated_by: User

  @ManyToOne(() => User, (user) => user.deleted_by_user_fk)
  deleted_by: User


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
  @OneToMany(() => User, (user) => user.created_by)
  create_by_user_fk: User[]
  @OneToMany(() => User, (user) => user.updated_by)
  updated_by_user_fk: User[]
  @OneToMany(() => User, (user) => user.deleted_by)
  deleted_by_user_fk: User[]

  // -- Roles
  @OneToMany(() => User, (user) => user.created_by)
  create_by_role_fk: User[]
  @OneToMany(() => User, (user) => user.updated_by)
  updated_by_role_fk: User[]
  @OneToMany(() => User, (user) => user.deleted_by)
  deleted_by_role_fk: User[]

}
