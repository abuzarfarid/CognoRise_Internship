
  //contact form to excel sheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwbyMgvg6SRrTnalIkSBDZiEsY4DLIWBNFrPa5Fc7ZWj30F4KSaIWVq79PNyrSmkEM2/exec';
  const form = document.forms['submitToGoogleSheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
              msg.innerHTML = "Message sent successfully"
              setTimeout(function () {
                  msg.innerHTML = ""
              }, 5000)
              form.reset()
          })
          .catch(error => console.error('Error!', error.message))
  })
    
  