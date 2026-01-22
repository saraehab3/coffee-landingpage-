
// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Header } from "./layout/header/header";
// import { Footer } from "./layout/footer/footer";
// import { ReactiveFormsModule } from '@angular/forms';
// import { routes } from './app.routes'; 
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, Header, Footer, ReactiveFormsModule],
//   templateUrl: './app.html',
//   styleUrl: './app.scss'
// })

// export class App {
//   protected readonly title = signal('business-landing');
// }

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,            // مهم جدا في Angular 16 Standalone
  imports: [RouterOutlet, Header, Footer, ReactiveFormsModule, Hero],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']     // صححنا من styleUrl -> styleUrls
})
export class App {
  protected readonly title = signal('business-landing');
}
