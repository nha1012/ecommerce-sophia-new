import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { RoleEntity } from './role.interface';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends CrudBaseService<RoleEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'role',
      },
      httpClient,
    );
  }
}
