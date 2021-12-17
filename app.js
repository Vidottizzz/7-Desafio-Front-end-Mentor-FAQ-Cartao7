// const acc = document.querySelectorAll(".accordion");

// acc.forEach((accordion) => {
//   accordion.onclick = function () {    
//     this.classList.toggle("is-open");

//     this.nextElementSibling.classList.toggle('show');
//   };
// });


const acc = document.querySelectorAll(".accordion");
var last;

acc.forEach((accordion) => {
  accordion.onclick = function () {  
    if (last) {
      last.classList.toggle('is-open', false);
      last.nextElementSibling.classList.toggle('show',false);
      
    }
     
    this.classList.toggle("is-open");
    
    this.classList.contains('is-open') ? this.nextElementSibling.classList.add('show') : this.nextElementSibling.classList.remove('show') 
    
    last = this;
  };
});
