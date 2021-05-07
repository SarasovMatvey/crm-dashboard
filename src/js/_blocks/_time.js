(() => {
  let activeTimeIndex = 0;
  refreshActive();

  $('.time__option').on('click', e => {
    activeTimeIndex = $(e.currentTarget).index();
    refreshActive();
  })

  function refreshActive() {
    $('.time__option').removeClass('time__option_active');
    $($('.time__option')[activeTimeIndex]).addClass('time__option_active');
    $('.time__field').val($('.time__option')[activeTimeIndex].textContent);
  }
})();