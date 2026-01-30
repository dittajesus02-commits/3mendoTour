import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  // @HostListener('window:scroll', [])
  // onScroll() {
  //   const topbar = document.querySelector<HTMLElement>('.topbar');
  //   if (!topbar) return;

  //   const scrolled = window.scrollY > 80;
  //   topbar.classList.toggle('is-scrolled', scrolled);
  // }
    readonly currentYear = new Date().getFullYear();

  @HostListener('window:scroll', [])
    onScroll() {
      const topbar = document.querySelector<HTMLElement>('.topbar');
      const hero = document.querySelector<HTMLElement>('.hero');

      if (!topbar || !hero) return;

      const trigger = hero.offsetHeight * 0.65; // 65% del hero
      const scrolled = window.scrollY > trigger;

      topbar.classList.toggle('is-scrolled', scrolled);
    }

    isMenuOpen = false;

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
      this.isMenuOpen = false;
    }

    
    openWhatsApp(): void {
      const phone = '584124589934'; // ← tu número en formato internacional, sin +
      const message = 'Hola, quiero información sobre el tour a La Ciénaga ';

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phone}?text=${encodedMessage}`;

      window.open(url, '_blank');
    }


}
