const accordionLi = document.querySelectorAll(".accordion");

accordionLi.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);
    //ternario
    accordion.classList.contains("is-open") ? content.classList.add("show") : content.classList.remove("show")
    
  };
});