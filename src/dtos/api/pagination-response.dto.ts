import {
  IResponseMessage,
  IResponseMessages,
} from '../../interfaces/response-message.interface';
// import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponseDto<T> implements IResponseMessages {
  currentPage: number;
  skippedRecords: number;
  totalPages: number;
  hasNext: boolean;

  // @ApiProperty({ type: () => [], isArray: true })
  content: T[];
  payloadSize: number;
  totalRecords: number;
  messages: IResponseMessage[] = [];
}
