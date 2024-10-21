import { Injectable } from '@nestjs/common';
import { CreateTypesExternalRequestDto } from './dto/create-types_external_request.dto';
import { UpdateTypesExternalRequestDto } from './dto/update-types_external_request.dto';

@Injectable()
export class TypesExternalRequestsService {
  create(createTypesExternalRequestDto: CreateTypesExternalRequestDto) {
    return 'This action adds a new typesExternalRequest';
  }

  findAll() {
    return `This action returns all typesExternalRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typesExternalRequest`;
  }

  update(id: number, updateTypesExternalRequestDto: UpdateTypesExternalRequestDto) {
    return `This action updates a #${id} typesExternalRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} typesExternalRequest`;
  }
}
