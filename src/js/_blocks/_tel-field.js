(() => {
  const telFields = $('.tel-field');

  $.mask.definitions['9'] = '';
  $.mask.definitions['n'] = '[0-9]';
  telFields.mask('+996(nnn)nn-nn-nn')
})();