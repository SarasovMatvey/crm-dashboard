(() => {
  if (!$("#history").length) return;

  fetch("http://localhost/rest/history")
    .then(resp => {
      if(resp.ok) return resp.json();
    })
    .then(data => {
      console.log(data);
      for (const {subject, activitytype, owner_first_name, owner_last_name} of data.data) {
        $("#history tbody").append(`
          <tr class="border">
            <td>${subject}</td>
            <td>${activitytype}</td>
            <td>${owner_first_name + ' ' + owner_last_name}</td>
          </tr>
        `);
      }
    });
})();