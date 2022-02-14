import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data Binding example';

  btnDisabled: boolean = false;

  onSwitchDisabled(): void {
    this.btnDisabled = !this.btnDisabled;
  }
}
