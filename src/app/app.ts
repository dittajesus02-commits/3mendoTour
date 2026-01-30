import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from "./landing/landing";

@Component({
  selector: 'app-root',
  imports: [ Landing],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('3mendo-tour');
}
