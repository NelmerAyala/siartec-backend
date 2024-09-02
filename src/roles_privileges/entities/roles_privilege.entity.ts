import { Privilege } from "src/privileges/entities/privilege.entity";
import { Role } from "src/roles/entities/role.entity";
import { Status } from "src/status/entities/status.entity";
import { Users } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm"

@Entity()
@Unique(["roleId", "privilegeId"])
export class RolesPrivilege {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public roleId: number

  @Column()
  public privilegeId: number

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
  @ManyToOne(() => Status, (statu) => statu.id_status_role_privilege_fk)
  status: Status

  @ManyToOne(() => Users, (user) => user.create_by_role_privilege_fk)
  created_by: Users

  @ManyToOne(() => Users, (user) => user.updated_by_role_privilege_fk)
  updated_by: Users

  @ManyToOne(() => Users, (user) => user.deleted_by_role_privilege_fk)
  deleted_by: Users

  /* 
    Table foreign keys columns
  */


  /* 
    Relationship
  */
  @ManyToOne(() => Role, (role) => role.id_roles_privileges_role_fk)
  public role: Role

  @ManyToOne(() => Privilege, (privilege) => privilege.id_privilege_role_privilege_fk)
  public privilege: Privilege
}