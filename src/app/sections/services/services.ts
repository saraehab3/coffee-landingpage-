import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
services = [
  { icon: 'fas fa-code', title: 'Web Development', desc: 'Modern Angular apps' },
  { icon: 'fas fa-mobile', title: 'Responsive Design', desc: 'Mobile first UI' },
  { icon: 'fas fa-rocket', title: 'Performance', desc: 'Fast & optimized' }
];

}
