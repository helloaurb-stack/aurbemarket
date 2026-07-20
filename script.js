document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", function () {
    alert("Product added! WhatsApp se order karein.");
    window.open("https://wa.me/919315344841", "_blank");
  });
});
