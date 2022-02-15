import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data Binding example';

  btnDisabled: boolean = false;

  users: User[] = [];

  constructor() {
    setTimeout(() => {
      this.users = [
        new User(1, 'Jani', 'jani@gmail.com'),
        new User(2, 'Juli', 'juli@gmail.com'),
        new User(3, 'Józsi', 'jozsi@gmail.com')
      ];
    }, 5000)
  }

  onSwitchDisabled(): void {
    this.btnDisabled = !this.btnDisabled;
  }

  onShowGreeting(): void {
    alert('Szia, én vagyok a user, bizony.');
  }

  onDeleteUser(user: User): void {
    console.log(user);
    let index = 0;
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].id === user.id) {index = i};
    }
    this.users.splice(index, 1)
  }
}
