import { Injectable } from '@nestjs/common';
import { CreateExternalRequestDto } from './dto/create-external_request.dto';
import { UpdateExternalRequestDto } from './dto/update-external_request.dto';

@Injectable()
export class ExternalRequestsService {
  create(createExternalRequestDto: CreateExternalRequestDto) {
    return 'This action adds a new externalRequest';
  }

  findAll() {
    return `This action returns all externalRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalRequest`;
  }

  update(id: number, updateExternalRequestDto: UpdateExternalRequestDto) {
    return `This action updates a #${id} externalRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalRequest`;
  }
}
