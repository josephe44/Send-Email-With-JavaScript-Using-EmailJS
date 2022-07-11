const sendName = document.getElementById('from_name')
const email = document.getElementById('reply_to')
const message = document.getElementById('message')
const btn = document.getElementById('button')
const form = document.getElementById('form')
form.addEventListener('submit', sendForm)

function sendForm(e) {
  e.preventDefault()

  btn.innerHTML = 'Sending...'

  emailjs.init('52xbsfCfWPRxHUfJH')
  const serviceID = 'PUT_YOUR_SERVICE_ID_HERE'
  const templateID = 'PUT_YOUR_TEMPLATE_ID_HERE'
  const publicKey = 'PUT_YOUR_PUBLIC_KEY_HERE'

  emailjs
    .send(
      serviceID,
      templateID,
      {
        from_name: sendName.value,
        to_name: 'PUT_YOUR_NAME_HERE',
        reply_to: email.value,
        message: message.value,
      },
      publicKey
    )
    .then(
      () => {
        btn.innerHTML = 'Email Sent'
      },
      (err) => {
        console.log(JSON.stringify(err))
      }
    )

  clearForm()
}

function clearForm() {
  sendName.value = ''
  email.value = ''
  message.value = ''
}
