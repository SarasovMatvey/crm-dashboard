(() => {
  const hamburger = $('.dashboard-hamburger');
  const menu = $('.dashboard__menu');
  
  hamburger.on('click', () => {
    hamburger.find('.hamburger').toggleClass('is-active');
    menu.toggleClass('dashboard__menu_open');
  })
})();