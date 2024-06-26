import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdatePasswordUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { hashPassword } from 'src/utils/bcrypt.utils';

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
    // user.password = updateUserDto.password;
    user.identity_document_letter = updateUserDto.identity_document_letter;
    user.identity_document = updateUserDto.identity_document;
    user.birthdate = updateUserDto.birthdate;
    user.constitution_date = updateUserDto.constitution_date;
    user.address = updateUserDto.address;
    user.phone_number = updateUserDto.phone_number;
    // user.last_connection = new Date();
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
  updatePasswordUser(id: number, updatePasswordUserDto: UpdatePasswordUserDto): Promise<Users> {
    const user: Users = new Users();
    user.password = updatePasswordUserDto.password;
    user.id = id;
    return this.userRepository.save(user);
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
