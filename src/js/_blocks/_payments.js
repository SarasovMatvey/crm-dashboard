(() => {
  if (!$("#payments").length) return;

  fetch("http://localhost/rest/payments")
    .then(resp => {
      if (resp.ok) return resp.json();
    })
    .then(data => {
      for (const {pay_type, amount} of data.data) {
        const humanRType = pay_type === "Receipt" ? "Приход" : pay_type;
        const humanRAmount = (+amount).toFixed(1);

        $("#payments tbody").append(`
          <tr class="border">
            <td>${humanRType}</td>
            <td>${humanRAmount}</td>
          </tr>;
        `);
      }
    });
})();