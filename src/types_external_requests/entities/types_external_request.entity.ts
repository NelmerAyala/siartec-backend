import { ExternalRequest } from 'src/external_requests/entities/external_request.entity';
import { Status } from 'src/status/entities/status.entity';
import { Subentity } from 'src/subentities/entities/subentity.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TypesExternalRequest {
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
  @ManyToOne(() => Status, (statu) => statu.id_status_type_external_request_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_type_external_request_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_type_external_request_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_type_external_request_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */
  @OneToMany(() => ExternalRequest, type => type.type_external_request)
  id_type_external_request_external_request_fk: ExternalRequest[];


}