# Reproduction of @nestjs/swagger Issue

Just run `npm run start:dev` and you'll see the issue.

The issues can be resolved by uncommenting those lines:

response.dto.ts -> Line 1 + 7
pagination-response.dto.ts -> Line 5 + 13

The Swagger docu @ http://localhost:3000/api will also show some errors and missing information on the DTOs

Also for some reason the swagger-cli plugin does not seem to work right in this demo.
