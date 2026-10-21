const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const submit = document.getElementById("submit");

a1.classList.add("hidden");
a2.classList.add("hidden");
a3.classList.add("hidden");
a4.classList.add("hidden");

submit.addEventListener("click", function(){
    a1.classList.remove("hidden");
    a2.classList.remove("hidden");
    a3.classList.remove("hidden");
    a4.classList.remove("hidden");
    

})