import { Entities } from 'src/entities/entities/entity.entity';
import { Status } from 'src/status/entities/status.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { TypesExternalRequest } from 'src/types_external_requests/entities/types_external_request.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ExternalRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  request_url: string;

//   @Column({ type: 'jsonb' })
  @Column({ type: 'text' })
  request_json: string;

//   @Column({ type: 'jsonb' })
  @Column({ type: 'text' })
  response_json: string;

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
  @ManyToOne(() => Status, (statu) => statu.id_status_external_request_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_external_request_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_external_request_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_external_request_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */
  @ManyToOne(() => TypesExternalRequest, (type) => type.id_type_external_request_external_request_fk)
  type_external_request: TypesExternalRequest

  @ManyToOne(() => Transaction, (transaccion) => transaccion.id_transaction_external_request_fk)
  transaction: Transaction

  /* 
    Relationship
  */


}