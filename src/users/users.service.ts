import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdatePasswordUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { hashPassword, compareHashPassword } from 'src/utils/bcrypt.utils';
import { Response } from 'express';

@Injectable()
export class UsersService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) { }

  /**
   * this is function is used to create User in User Entity.
   * @param createUserDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const user: Users = new Users();
    user.firstname = createUserDto.firstname;
    user.lastname = createUserDto.lastname;
    user.email = createUserDto.email;
    user.password = await hashPassword(createUserDto.password);
    user.identity_document_letter = createUserDto.identity_document_letter;
    user.identity_document = createUserDto.identity_document;
    user.birthdate = createUserDto.birthdate;
    user.constitution_date = createUserDto.constitution_date;
    user.address = createUserDto.address;
    user.phone_number = createUserDto.phone_number;
    user.contributor_type = createUserDto.contributor_type;
    user.role = createUserDto.role;

    return this.userRepository.save(user);
  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAllUser(): Promise<Users[]> {
    return this.userRepository.find();
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of user.
   * @returns promise of user
   */
  findOneUser(id: number): Promise<Users> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * this function used to get data of use whose email is passed in parameter
   * @param email is type of varchar, which represent the email of user.
   * @returns promise of user
   */
  findOneUserByEmail(email: string): Promise<Users> {
    return this.userRepository.findOneBy({ email });
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    const user: Users = new Users();
    user.firstname = updateUserDto.firstname;
    user.lastname = updateUserDto.lastname;
    user.email = updateUserDto.email;
    user.identity_document_letter = updateUserDto.identity_document_letter;
    user.identity_document = updateUserDto.identity_document;
    user.birthdate = updateUserDto.birthdate;
    user.constitution_date = updateUserDto.constitution_date ? updateUserDto.constitution_date : null;
    user.address = updateUserDto.address;
    user.phone_number = updateUserDto.phone_number;

    user.id = id;
    return this.userRepository.save(user);
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
  async updatePasswordUser(id: number, updatePasswordUserDto: UpdatePasswordUserDto, response: Response): Promise<Object> {

    const user = await this.userRepository.findOneBy({ id });

    const verifiedPassword = await compareHashPassword(updatePasswordUserDto.passwordCurrent, user.password);

    if (!verifiedPassword) {
      return response.status(400).json({ msg: "La contraseña actual no es correcta, por favor verifique!" });
    }
    this.userRepository.update(id, { "password": await hashPassword(updatePasswordUserDto.passwordNewConfirm) });

    return response.status(200).json({ msg: "Contraseña actualizada satisfactoriamente." });
  }

  /**
   * this function is used to remove or delete user from database.
   * @param id is the type of number, which represent id of user
   * @returns nuber of rows deleted or affected
   */
  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}

// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UsersService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all users`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
