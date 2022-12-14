import { Injectable } from '@nestjs/common';
import { TestObjectDto } from './dtos/test-object.dto';
import { PaginationResponseDto } from './dtos';

@Injectable()
export class AppService {
  getHello(): PaginationResponseDto<TestObjectDto> {
    return {
      content: [
        {
          name: 'test',
        },
        {
          name: 'test2',
        },
        {
          name: 'test3',
        },
      ],
      currentPage: 0,
      hasNext: false,
      messages: [],
      payloadSize: 0,
      skippedRecords: 0,
      totalPages: 0,
      totalRecords: 0,
    };
  }
}
