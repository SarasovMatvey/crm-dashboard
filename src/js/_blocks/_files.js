(() => {
  if (!$("#files").length) return;
  
  fetch("http://localhost/rest/files")
    .then(resp => {
      if(resp.ok) return resp.json();
    })
    .then(data => {
      console.log(data);
      for (const {attachmentsid, name} of data.data) {
        $("#files tbody").append(`
          <tr class="border">
            <td><a href="http://localhost/rest/files/${attachmentsid}}">${name}</a></td>
          </tr>
        `);
      }
    });
})();