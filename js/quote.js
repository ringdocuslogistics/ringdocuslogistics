import * as emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

document.addEventListener("DOMContentLoaded", function () {
  emailjs.default.init("cy_vvdmVHN8VwOIbK");

  const form = document.getElementById("quote-form");
  const bar = document.getElementById("progress-bar");
  const text = document.getElementById("progress-text");
  const spinner = document.getElementById("spinner");
  const preview = document.getElementById("quote-preview");
  const output = document.getElementById("quote-output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const rawData = {};
    formData.forEach((value, key) => {
      rawData[key] = value;
    });

    const data = {
      name: rawData.name,
      email: rawData.email,
      phone: rawData.phone,
      cargo_type: rawData["cargo_type"],
      weight: rawData.weight,
      dimensions: rawData.dimensions,
      service_type: rawData["service-type"],
      origin: rawData.origin,
      destination: rawData.destination,
      pickup_date: rawData["pickup_date"],
      details: rawData.details
    };

    emailjs.send("service_w8gyg5b", "template_r0up4aa", data)
      .then(() => {
        showProgress();
        showPreview(data);
        form.reset();
      })
      .catch(err => {
        console.error("EmailJS error:", err);
        alert("Sending failed");
      });
  });

  function showProgress() {
    bar.style.width = "0%";
    spinner.style.display = "block";
    let value = 0;
    const interval = setInterval(() => {
      value += 20;
      bar.style.width = value + "%";
      if (value >= 100) {
        clearInterval(interval);
        spinner.style.display = "none";
        text.innerText = "Request submitted!";
      }
    }, 300);
  }

  function showPreview(data) {
    preview.style.display = "block";
    output.innerHTML = `
      <strong>Name:</strong> ${data.name}<br>
      <strong>Email:</strong> ${data.email}<br>
      <strong>Phone:</strong> ${data.phone}<br>
      <strong>Cargo Type:</strong> ${data.cargo_type}<br>
      <strong>Weight:</strong> ${data.weight} kg<br>
      <strong>Dimensions:</strong> ${data.dimensions}<br>
      <strong>Service Type:</strong> ${data.service_type}<br>
      <strong>Pickup Address:</strong> ${data.origin}<br>
      <strong>Delivery Address:</strong> ${data.destination}<br>
      <strong>Date:</strong> ${data.pickup_date}<br>
      <strong>Notes:</strong> ${data.details}
    `;
  }
});