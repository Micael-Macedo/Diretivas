import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchComponentComponent } from "./switch-component/switch-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'diretivas';
}
