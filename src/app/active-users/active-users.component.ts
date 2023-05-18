import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<string>();

  constructor(private usersService: UsersService) {}

  setToInactive(user: string) {
    this.userSetToInactive.emit(user);
  }
}
