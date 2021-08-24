
let gbCounter = localStorage.getItem("gbCounter")
if (!gbCounter) {
   gbCounter = 0
}
localStorage.setItem("gbCounter", gbCounter)
document.getElementById("gb").textContent = gbCounter
document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))

let ccCounter = localStorage.getItem("ccCounter")
if (!ccCounter) {
   ccCounter = 0
}
localStorage.setItem("ccCounter", ccCounter)
document.getElementById("cc").textContent = ccCounter
document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))

let sugarCounter = localStorage.getItem("sugarCounter")
if (!sugarCounter) {
   sugarCounter = 0
}
localStorage.setItem("sugarCounter", sugarCounter)
document.getElementById("sugar").textContent = sugarCounter
document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))

//Assign buttons

let minus_gb = document.getElementById("minus_gb");
minus_gb.addEventListener("click", function () {
	if(gbCounter>0){gbCounter--;}
    console.log("gbCounter") 
    localStorage.setItem("gbCounter", gbCounter)
    document.getElementById("gb").textContent = gbCounter	
document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))
})

let add_gb = document.getElementById("add_gb");
add_gb.addEventListener("click", function () {
	gbCounter++;
    console.log("gbCounter") 
    localStorage.setItem("gbCounter", gbCounter)
    document.getElementById("gb").textContent = gbCounter
    document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))
})
 
let minus_cc = document.getElementById("minus_cc");
minus_cc.addEventListener("click", function () {
    if(ccCounter>0){ccCounter--;}
    console.log("ccCounter") 
    localStorage.setItem("ccCounter", ccCounter)
    document.getElementById("cc").textContent = ccCounter
    document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))
})
 
let add_cc = document.getElementById("add_cc");
add_cc.addEventListener("click", function () {
    ccCounter++;
    console.log("ccCounter") 
    localStorage.setItem("ccCounter", ccCounter)
    document.getElementById("cc").textContent = ccCounter
    document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))
})
  
let minus_sugar = document.getElementById("minus_sugar");
minus_sugar.addEventListener("click", function () {
    if(sugarCounter>0){sugarCounter--;}
    console.log("sugarCounter")
    localStorage.setItem("sugarCounter", sugarCounter)
    document.getElementById("sugar").textContent = sugarCounter
    document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))
})
  
let add_sugar = document.getElementById("add_sugar");
add_sugar.addEventListener("click", function () {
    sugarCounter++;
    console.log("sugarCounter") 
    localStorage.setItem("sugarCounter", sugarCounter)
    document.getElementById("sugar").textContent = sugarCounter
    document.getElementById("qty_total").textContent = Number(localStorage.getItem("gbCounter")) + Number(localStorage.getItem("ccCounter")) + Number(localStorage.getItem("sugarCounter"))
})
 
 
    //Update Cookie count
        let updatesummary = function() {
    document.getElementById("gb").textContent = gbCounter;
    document.getElementById("cc").textContent = ccCounter;
    document.getElementById("sugar").textContent = sugarCounter;
    document.getElementById("qty_total").textContent = qty_total;
    }
 