document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quote-form");
  const bar = document.getElementById("progress-bar");
  const text = document.getElementById("progress-text");
  const spinner = document.getElementById("spinner");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Показать прогресс-бар
    document.getElementById("quote-progress").style.display = "block";
    bar.style.width = "0%";
    spinner.style.display = "block";
    text.innerText = "Processing your quote...";

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      bar.style.width = value + "%";
      if (value >= 100) {
        clearInterval(interval);
        spinner.style.display = "none";
        text.innerText = "Request sent!";
        form.reset(); // очистить форму
      }
    }, 200);
  });
});