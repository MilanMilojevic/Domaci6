import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  setUserToInactive(user: string) {
    const index = this.activeUsers.indexOf(user);
    if (index !== -1) {
      this.activeUsers.splice(index, 1);
      this.inactiveUsers.push(user);
      this.counterService.incrementActiveToInactive();
    }
  }

  setUserToActive(user: string) {
    const index = this.inactiveUsers.indexOf(user);
    if (index !== -1) {
      this.inactiveUsers.splice(index, 1);
      this.activeUsers.push(user);
      this.counterService.incrementInactiveToActive();
    }
  }
}
