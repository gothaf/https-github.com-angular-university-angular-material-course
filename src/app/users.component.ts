import { Component, Input } from '@angular/core';
import { UserService, UserQuery } from './user.service';
import { PaginatedDataSource } from './paginated-datasource';
import { User } from './user';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: [`./users.component.scss`]
})
export class UsersComponent  {
    displayedColumns = ['id', 'name', 'email', 'registration']

    data = new PaginatedDataSource<User, UserQuery>(
      (request, query) => this.users.page(request, query),
      {property: 'username', order: 'desc'},
      {search: '', registration: undefined},
      2
    )

    constructor(private users: UserService) {

    }
}
