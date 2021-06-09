(() => {
  let filialsInfo = null;
  let formCurrentSlide = 0;
  let filialField = $("select[name='place']");
  let serviceField = $("select[name='service']");
  let workerField = $("select[name='worker']");

  addClassInLabelsForRequiredFields();
  setFilialsInfo().then(() => {
    setFilialsNames();
    setFilial();
  });
  showTabs();
  setActiveTab(formCurrentSlide);
  setFormContent(formCurrentSlide);
  refreshControlBtns(formCurrentSlide);

  $(".contact-form__next-btn").on("click", (e) => {
    e.preventDefault();
    if (!isAllFieldsNotEmpty(formCurrentSlide)) return;
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

  filialField.on('change', e => {
    setFilial();
  });

  serviceField.on('change', e => {
    setService();
  });

  function isAllFieldsNotEmpty(slide) {
    const fields = $(
      `.contact-form__content[data-content-index="${slide}"] input:not([disabled]),
       .contact-form__content[data-content-index="${slide}"] select:not([disabled]),
       .contact-form__content[data-content-index="${slide}"] textarea:not([disabled])`
    );

    for (const field of fields) {
      if (!$(field).val()) return false;
    }

    return true;
  }

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

    const prevBtn = $(".contact-form__prev-btn");
    const nextBtn = $(".contact-form__next-btn");
    const submitBtn = $(".contact-form__submit-btn");

    prevBtn.css("display", "none");
    nextBtn.css("display", "none");
    submitBtn.css("display", "none");

    if (currentContent === 0) {
      nextBtn.css("display", "block");
    } else if (currentContent === formContentsCount.length - 1) {
      prevBtn.css("display", "block");
      submitBtn.css("display", "block");
    } else {
      prevBtn.css("display", "block");
      nextBtn.css("display", "block");
    }
  }

  function addClassInLabelsForRequiredFields(className) {
    const requiredFields = $(".contact-form [required]");
    requiredFields
      .parent()
      .find(".contact-form__label")
      .addClass("contact-form__label_required");
  }

  function setFilialsInfo() {
    return fetch("http://localhost/rest/filials")
            .then(resp => {
              if (resp.ok) return resp.json();
            })
            .then(data => {
              filialsInfo = data.data;
            })
  }

  function setSelectOptions(selectEl, options) {
    $(selectEl).html('');
    
    for (const option of options) {
      const {isSelected, text, value} = option;
      selectEl.append(`
        <option 
          ${isSelected ? 'selected' : ''} 
          value="${value}"
        >${text}</option>
      `);
    };
  }

  function setFilialsNames() {
    filialField.html('');
    filialsNames = Object.keys(filialsInfo);
    for (const filialName of filialsNames) {
      filialField.append(`
        <option 
          value="${filialName}"
        >${filialName}</option>
      `)
    }
  }

  function setFilial() {
    const filialName = filialField.val();

    const services = filialsInfo[filialName].map(current => ({
      text: current.name,
      value: current.id,
      isSelected: false,
    }), []);

    const workers = filialsInfo[filialName][0].workers.map(current => ({
      text: current.name,
      value: current.name,
      isSelected: false,
    }));

    setSelectOptions(serviceField, services);
    setSelectOptions(workerField, workers);
  }

  function setService() {
    const filialName = filialField.val();
    const serviceId = serviceField.val();

    let selectedServiceInfo;

    for (const service of filialsInfo[filialName]) {
      if (service.id === serviceId) {
        selectedServiceInfo = service;
        break;
      } 
    }

    const workers = selectedServiceInfo.workers.map(current => ({
      text: current.name,
      value: current.name,
      isSelected: false,
    }));

    setSelectOptions(workerField, workers);
  }
})();
