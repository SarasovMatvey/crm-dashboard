(() => {
  $('.calendar__field').val(getToday());

  
  $(".calendar__body").datepicker({
    monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    onSelect: function(){
      let selected = $(this).val();
      $('.calendar__field').val(selected)
    },
  });

  function getToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  }
})();
