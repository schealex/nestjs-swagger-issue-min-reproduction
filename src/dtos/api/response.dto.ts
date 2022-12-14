// import { ApiProperty } from '@nestjs/swagger';

/**
 * Dto for the response
 */
export class ResponseDto<T> {
  // @ApiProperty({ type: 'object', isArray: false })
  payload: T;
  timestamp: number;
}
