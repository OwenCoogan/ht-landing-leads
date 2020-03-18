document.addEventListener('DOMContentLoaded', () => {
  const copyTextareaBtn = document.querySelector('.link_copy');
  z = 0;

  if (copyTextareaBtn) {
    console.log(copyTextareaBtn.value);
    console.log(window.location.hostname);
    copyTextareaBtn.value = window.location.hostname + '/about/parrainage';
    copyTextareaBtn.addEventListener('click', function (event) {
      const message = document.querySelector('.alert_form');
      const alert = document.createTextNode('Lien Copié !');
      copyTextareaBtn.focus();
      copyTextareaBtn.select();
      z++;

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
      } catch (err) {
        console.log('Oops, unable to copy');
      }

      if (msg = successful && z === 1) {
        message.append(alert);
      }
    });
  }
});