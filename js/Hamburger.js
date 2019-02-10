class Hamburger {
  constructor(webNav) {
    this.navToggle = document.querySelector('.nav-toggle');
    this.nav = document.querySelector('.nav');
    this.navElms = [].slice.call(document.getElementsByClassName('mobile-nav-els'));
    this.events();
  }

  events() {
    this.navToggle.addEventListener('click', () => { this.doToggle(); });
    this.navElms.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(i);
        webNav.scrollToTop(i);
        // this.scrollToTop(this.selectedIndex);
        this.doToggle();
      });

    });
  }

  doToggle() {
    this.navToggle.classList.toggle('expanded');
    this.nav.classList.toggle('expanded');
  }
}