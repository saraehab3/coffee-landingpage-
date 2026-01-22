import { Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero";
import { Services } from "../../sections/services/services";
import { About } from "../../sections/about/about";
import { Cta } from "../../sections/cta/cta";
import { ContactComponent } from "../../sections/contact/contact";

@Component({
  selector: 'app-home',
  imports: [Hero, Services, About, Cta, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
