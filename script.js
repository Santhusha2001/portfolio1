var typed = new typed('home-text-repeat', {
  strings: ['A Web Developer!', 'Software Engineer!'],
  typeSpeed: 50,
  loop: true,
  hideCursor: true,
    onComplete: function() {
  typed.cursor.remove();
  
}
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("img")) {
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.innerHTML = `
          <img src="${e.target.src}" alt="Popup Image">
          <span class="lightbox-close">&times;</span>
      `;
      document.body.appendChild(lightbox);

      lightbox.querySelector(".lightbox-close").addEventListener("click", function () {
          lightbox.remove();
      });
  }
});
