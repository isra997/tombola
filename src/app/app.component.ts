import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TombolaComponent } from './tombola/tombola.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TombolaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tombola';
}
