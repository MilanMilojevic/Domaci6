import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.activeToInactiveCount = this.counterService.activeToInactiveCount;
    this.inactiveToActiveCount = this.counterService.inactiveToActiveCount;
  }

  onSetToInactive(user: string) {
    this.usersService.setUserToInactive(user);
    this.activeToInactiveCount = this.counterService.activeToInactiveCount;
  }

  onSetToActive(user: string) {
    this.usersService.setUserToActive(user);
    this.inactiveToActiveCount = this.counterService.inactiveToActiveCount;
  }
}
