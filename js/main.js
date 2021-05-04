(() => {
  $(".calendar").datepicker();
})();

(() => {
  let formCurrentSlide = 0;
  showTabs();
  setActiveTab(formCurrentSlide);
  setFormContent(formCurrentSlide);
  refreshControlBtns(formCurrentSlide);

  $(".contact-form__next-btn").on("click", (e) => {
    e.preventDefault();
    if (formCurrentSlide + 1 > $(".contact-form__tab").length - 1) return;
    formCurrentSlide++;
    setActiveTab(formCurrentSlide);
    setFormContent(formCurrentSlide);
    refreshControlBtns(formCurrentSlide);
  });

  $(".contact-form__prev-btn").on("click", (e) => {
    e.preventDefault();
    if (formCurrentSlide - 1 < 0) return;
    formCurrentSlide--;
    setActiveTab(formCurrentSlide);
    setFormContent(formCurrentSlide);
    refreshControlBtns(formCurrentSlide);
  });

  function setActiveTab(tabIndex) {
    const tabs = $(".contact-form__tab");
    tabs.removeClass("contact-form__tab_active");
    $(tabs[tabIndex]).addClass("contact-form__tab_active");
  }

  function setFormContent(formContentIndex) {
    $(".contact-form__content").addClass("contact-form__content_hidden");
    $(
      `.contact-form__content[data-content-index="${formContentIndex}"`
    ).removeClass("contact-form__content_hidden");
  }

  function showTabs() {
    const formContentsCount = $(".contact-form__content");

    for (let i = 0; i < formContentsCount.length; i++) {
      $(".contact-form__tabs").append(`
        <li class="contact-form__tab">${i + 1}</li>
      `);
    }
  }

  function refreshControlBtns(currentContent) {
    const formContentsCount = $(".contact-form__content");

    const prevBtn = $('.contact-form__prev-btn');
    const nextBtn = $('.contact-form__next-btn');
    const submitBtn = $('.contact-form__submit-btn');

    prevBtn.css('display', 'none');
    nextBtn.css('display', 'none');
    submitBtn.css('display', 'none');

    if (currentContent === 0) {
      nextBtn.css('display', 'block');
    } else if (currentContent === formContentsCount.length - 1) {
      prevBtn.css('display', 'block');
      submitBtn.css('display', 'block');
    } else {
      prevBtn.css('display', 'block');
      nextBtn.css('display', 'block');
    }
  }
})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9ibG9ja3MvX2NhbGVuZGFyLmpzIiwiX2Jsb2Nrcy9fY29udGFjdC1mb3JtLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG4gICQoXCIuY2FsZW5kYXJcIikuZGF0ZXBpY2tlcigpO1xufSkoKTtcbiIsIigoKSA9PiB7XG4gIGxldCBmb3JtQ3VycmVudFNsaWRlID0gMDtcbiAgc2hvd1RhYnMoKTtcbiAgc2V0QWN0aXZlVGFiKGZvcm1DdXJyZW50U2xpZGUpO1xuICBzZXRGb3JtQ29udGVudChmb3JtQ3VycmVudFNsaWRlKTtcbiAgcmVmcmVzaENvbnRyb2xCdG5zKGZvcm1DdXJyZW50U2xpZGUpO1xuXG4gICQoXCIuY29udGFjdC1mb3JtX19uZXh0LWJ0blwiKS5vbihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtQ3VycmVudFNsaWRlICsgMSA+ICQoXCIuY29udGFjdC1mb3JtX190YWJcIikubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgIGZvcm1DdXJyZW50U2xpZGUrKztcbiAgICBzZXRBY3RpdmVUYWIoZm9ybUN1cnJlbnRTbGlkZSk7XG4gICAgc2V0Rm9ybUNvbnRlbnQoZm9ybUN1cnJlbnRTbGlkZSk7XG4gICAgcmVmcmVzaENvbnRyb2xCdG5zKGZvcm1DdXJyZW50U2xpZGUpO1xuICB9KTtcblxuICAkKFwiLmNvbnRhY3QtZm9ybV9fcHJldi1idG5cIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZm9ybUN1cnJlbnRTbGlkZSAtIDEgPCAwKSByZXR1cm47XG4gICAgZm9ybUN1cnJlbnRTbGlkZS0tO1xuICAgIHNldEFjdGl2ZVRhYihmb3JtQ3VycmVudFNsaWRlKTtcbiAgICBzZXRGb3JtQ29udGVudChmb3JtQ3VycmVudFNsaWRlKTtcbiAgICByZWZyZXNoQ29udHJvbEJ0bnMoZm9ybUN1cnJlbnRTbGlkZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNldEFjdGl2ZVRhYih0YWJJbmRleCkge1xuICAgIGNvbnN0IHRhYnMgPSAkKFwiLmNvbnRhY3QtZm9ybV9fdGFiXCIpO1xuICAgIHRhYnMucmVtb3ZlQ2xhc3MoXCJjb250YWN0LWZvcm1fX3RhYl9hY3RpdmVcIik7XG4gICAgJCh0YWJzW3RhYkluZGV4XSkuYWRkQ2xhc3MoXCJjb250YWN0LWZvcm1fX3RhYl9hY3RpdmVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGb3JtQ29udGVudChmb3JtQ29udGVudEluZGV4KSB7XG4gICAgJChcIi5jb250YWN0LWZvcm1fX2NvbnRlbnRcIikuYWRkQ2xhc3MoXCJjb250YWN0LWZvcm1fX2NvbnRlbnRfaGlkZGVuXCIpO1xuICAgICQoXG4gICAgICBgLmNvbnRhY3QtZm9ybV9fY29udGVudFtkYXRhLWNvbnRlbnQtaW5kZXg9XCIke2Zvcm1Db250ZW50SW5kZXh9XCJgXG4gICAgKS5yZW1vdmVDbGFzcyhcImNvbnRhY3QtZm9ybV9fY29udGVudF9oaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93VGFicygpIHtcbiAgICBjb25zdCBmb3JtQ29udGVudHNDb3VudCA9ICQoXCIuY29udGFjdC1mb3JtX19jb250ZW50XCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtQ29udGVudHNDb3VudC5sZW5ndGg7IGkrKykge1xuICAgICAgJChcIi5jb250YWN0LWZvcm1fX3RhYnNcIikuYXBwZW5kKGBcbiAgICAgICAgPGxpIGNsYXNzPVwiY29udGFjdC1mb3JtX190YWJcIj4ke2kgKyAxfTwvbGk+XG4gICAgICBgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoQ29udHJvbEJ0bnMoY3VycmVudENvbnRlbnQpIHtcbiAgICBjb25zdCBmb3JtQ29udGVudHNDb3VudCA9ICQoXCIuY29udGFjdC1mb3JtX19jb250ZW50XCIpO1xuXG4gICAgY29uc3QgcHJldkJ0biA9ICQoJy5jb250YWN0LWZvcm1fX3ByZXYtYnRuJyk7XG4gICAgY29uc3QgbmV4dEJ0biA9ICQoJy5jb250YWN0LWZvcm1fX25leHQtYnRuJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gJCgnLmNvbnRhY3QtZm9ybV9fc3VibWl0LWJ0bicpO1xuXG4gICAgcHJldkJ0bi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIG5leHRCdG4uY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICBzdWJtaXRCdG4uY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuICAgIGlmIChjdXJyZW50Q29udGVudCA9PT0gMCkge1xuICAgICAgbmV4dEJ0bi5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRDb250ZW50ID09PSBmb3JtQ29udGVudHNDb3VudC5sZW5ndGggLSAxKSB7XG4gICAgICBwcmV2QnRuLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgc3VibWl0QnRuLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2QnRuLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgbmV4dEJ0bi5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iLCIvLz1pbmNsdWRlICcuL19ibG9ja3MvKi5qcydcbiJdfQ==
