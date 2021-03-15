import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from 'src/environments/environment.prod';
import { ProductEntity } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceApi extends CrudBaseService<ProductEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'product',
      },
      httpClient,
    );
  }
}
