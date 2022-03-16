//primer

  let exp = document.querySelector("#ex");
  let moreText1 = document.getElementById("more");
  let div1 = document.querySelector(".sec1");
 exp.addEventListener("click", myFunction);

function myFunction() {
  moreText1.classList.toggle("v1");
  div1.style.backgroundColor = "#87CCF7";
};
 

//segundo
  let pro = document.querySelector("#prof");
  let moreText2 = document.getElementById("more2");
  let div2 = document.querySelector(".sec2");
 pro.addEventListener("click", second);

function second() {
  moreText2.classList.toggle("v2");
  div2.style.backgroundColor = "#87CCF7";
};


//tercero
  let aca = document.querySelector("#acad");
  let moreText3 = document.getElementById("more3");
  let div3 = document.querySelector(".sec3");
 aca.addEventListener("click", third);

 function third() {
  moreText3.classList.toggle("v3");
  div3.style.backgroundColor = "#87CCF7";
 };

// forth
  let idi = document.querySelector("#idioma");
  let moreText4 = document.getElementById("more4");
  let div4 = document.querySelector(".sec4");
  idi.addEventListener("click", forth);

   function forth() {
    moreText4.classList.toggle("v4");
    div4.style.backgroundColor = "#87CCF7";
 };
