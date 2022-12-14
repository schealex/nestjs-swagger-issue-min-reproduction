import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiPaginatedResponse } from './decorators/api-paginated-response.decorador';
import { TestObjectDto } from './dtos/test-object.dto';
import { PaginationResponseDto } from './dtos';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ description: 'Get some resource' })
  @ApiPaginatedResponse(TestObjectDto)
  getHello(): PaginationResponseDto<TestObjectDto> {
    return this.appService.getHello();
  }
}
