import { PaginationResponseDto, ResponseDto } from './api';
import { ApiExtraModels } from '@nestjs/swagger';

@ApiExtraModels(PaginationResponseDto)
@ApiExtraModels(ResponseDto)
export class TestObjectDto {
  name: string;
}
