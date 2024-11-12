import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButtonComponent } from "./ui/my-button/my-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bindhiya';
}
