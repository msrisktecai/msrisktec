function sendEmail(event) {
    event.preventDefault(); // prevent normal form submit
  
    const params = {
      name: document.querySelector('input[name="name"]').value,
      email: document.querySelector('input[name="email"]').value,
      message: document.querySelector('textarea[name="message"]').value
    };
  
    emailjs.send("service_uh2kvqs", "template_zhxdoum", params)
      .then(() => {
        
        window.location.reload(); // ✅ refresh the page after successful email send
      })
      .catch((error) => {
      });
  }
  