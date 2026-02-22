import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Unsubscripe } from './base/unsubscripe';
import { Footer } from "./core/ui/footer/footer";
import { Header } from "./core/ui/header/header";
import { HomePage } from "./pages/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [Footer, Header, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App extends Unsubscripe {
  protected readonly title = signal('BeControl');
}
