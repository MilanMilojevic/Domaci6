import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<string>();

  constructor(private usersService: UsersService) {}

  setToActive(user: string) {
    this.userSetToActive.emit(user);
  }
}
