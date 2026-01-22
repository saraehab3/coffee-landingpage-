import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  
})
export class Header implements OnInit, AfterViewInit {

  activeSection = 'home';
  isScrolled = false;

  sectionMap: { [key: string]: string } = { 'hero': 'home', 'services': 'services', 'about': 'about', 'contact': 'contact' };

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

ngAfterViewInit() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.activeSection = this.sectionMap[sectionId] || sectionId;
        }
      });
    },
    {
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0
    }
  );

  Object.keys(this.sectionMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

  setActive(section: string) {
    this.activeSection = section;
  }
}



