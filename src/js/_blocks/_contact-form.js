(() => {
  // const filials = [
  //   {
  //     filialName: 'Филиал №1 - Токомбаева 23/3',
  //     services: [
  //       {
  //         serviceName: 'Медицинский педикюр',
  //         performers: ['Иван Иванов', 'John Doe'],
  //         descRows: [
  //           'Длительность 60 Минут',
  //           'Цена 1500.00 Сом',
  //           'Место проведения: Филиал №2 - Панфилова 45',
  //         ]
  //       },
  //       {
  //         serviceName: 'СПА',
  //         performers: ['Иван Иванов', 'John Doe'],
  //         descRows: [
  //           'Какое-нибудь СПА',
  //           'Длительность 120 Минут',
  //           'Цена 1500.00 Сом',
  //           'Место проведения: Филиал №3 - Исанова 10',
  //         ]
  //       }
  //     ]
  //   }
  // ]

  addClassInLabelsForRequiredFields();

  let formCurrentSlide = 0;
  showTabs();
  setActiveTab(formCurrentSlide);
  setFormContent(formCurrentSlide);
  refreshControlBtns(formCurrentSlide);

  $(".contact-form__sms-btn").on("click", (e) => {
    e.preventDefault();
    const smsConfirm = $(".contact-form__sms-confirm");
    smsConfirm.css("display", "flex");
  });

  let signUpIsOpen = false;
  $(".contact-form__sign-up-btn").on("click", (e) => {
    e.preventDefault();
    signUpIsOpen = !signUpIsOpen;
    $(".contact-form__sign-in").toggleClass("contact-form__sign-in_hidden");
    $(".contact-form__sign-up").toggleClass("contact-form__sign-up_hidden");
    if (signUpIsOpen) {
      e.currentTarget.textContent = "Уже зарегистрированы?";
      $(".contact-form__sign-in input, .contact-form__sign-in textarea").prop(
        "disabled",
        true
      );
      $(".contact-form__sign-up input, .contact-form__sign-in textarea").prop(
        "disabled",
        false
      );
    } else {
      e.currentTarget.textContent = "Зарегистрироваться";
      $(".contact-form__sign-up input, .contact-form__sign-in textarea").prop(
        "disabled",
        true
      );
      $(".contact-form__sign-in input, .contact-form__sign-in textarea").prop(
        "disabled",
        false
      );
    }
  });

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
})();
