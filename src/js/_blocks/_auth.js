(() => {
  $(".auth__sms-btn").on("click", (e) => {
    e.preventDefault();
    const smsConfirm = $(".auth__sms-confirm");
    smsConfirm.css("display", "flex");
  });

  let signUpIsOpen = false;
  $(".auth__sign-up-btn").on("click", (e) => {
    e.preventDefault();
    signUpIsOpen = !signUpIsOpen;
    $(".auth__sign-in").toggleClass("auth__sign-in_hidden");
    $(".auth__sign-up").toggleClass("auth__sign-up_hidden");
    if (signUpIsOpen) {
      e.currentTarget.textContent = "Уже зарегистрированы?";
      $(".auth__sign-in input, .auth__sign-in textarea").prop("disabled", true);
      $(".auth__sign-up input, .auth__sign-in textarea").prop(
        "disabled",
        false
      );
    } else {
      e.currentTarget.textContent = "Зарегистрироваться";
      $(".auth__sign-up input, .auth__sign-in textarea").prop("disabled", true);
      $(".auth__sign-in input, .auth__sign-in textarea").prop(
        "disabled",
        false
      );
    }
  });
})();
