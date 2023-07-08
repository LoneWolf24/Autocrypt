 
const first_plan = document.getElementById("starter-price")
const second_plan = document.getElementById("professional-price")
const third_plan = document.getElementById("business-price")

/////////////////////// HAMBURGER ////////////////////////
 // Look for .hamburger
 var hamburger = document.querySelector(".hamburger");
 // On click
 hamburger.addEventListener("click", function() {
   // Toggle class "is-active"
   hamburger.classList.toggle("is-active");
   // Do something else, like open/close menu
 });
 /////////////////// END OF HAMBURGER /////////////////////


 ///////////////// SELECT PLANS //////////////////////////
 // Get all the divs with the class "plan"
const divs = document.querySelectorAll('.plan');
// Add a click event listener to each div
divs.forEach((div) => {
  div.addEventListener('click', function() {
    // Remove the "active" class from all divs
    divs.forEach((div) => {
      div.classList.remove('plan-active');
    });

    // Add the "active" class to the clicked div
    this.classList.add('plan-active');
  });
});
 /////////////// END OF SELECT PLANS ///////////////////////


//////////////// MNTHLY OR YEARLY Buttons //////////////////
 // Get all the divs with the class "plan"
 const plan_btns = document.querySelectorAll('.plan-btns');
 const terms = document.getElementsByClassName("term");

 // Add a click event listener to each div
 plan_btns.forEach((div) => {
  div.addEventListener('click', function() {
     // Remove the "active" class from all divs
     plan_btns.forEach((div) => {
      div.classList.remove('plan-btns-active');
     });
 
     // Add the "active" class to the clicked div
     this.classList.add('plan-btns-active');
     div_id = event.target.id
     console.log(div_id)
     if(div_id == "yearly_btn"){
        yearly()
        // changing "Per Month" to "Per Year"
        for(let i=0; i < terms.length; i++){
          terms[i].textContent = "Per Year"
        }
     }
     else{
        monthly()
        // Changing "Per Year" to "Per Month"
        for(let i=0; i < terms.length; i++){
          terms[i].textContent = "Per Month"
        }
     }
   });
 });
 ////////////// END OF MNTHLY OR YEARLY Buttons /////////////

function yearly(){
  first_plan.innerHTML= "$120"
  second_plan.innerHTML = "$348"
  third_plan.innerHTML = "$588"
}
function monthly(){
  first_plan.innerHTML= "$10"
  second_plan.innerHTML = "$29"
  third_plan.innerHTML = "$49"
}


///////////////////// WORD LIMIT FOR FEEDBACKS ///////////////////////////////
const paragraphs = document.getElementsByClassName("feedback");
const characterLimit = 100; // Set the desired character limit

for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];

  if (paragraph.textContent.length > characterLimit) {
    paragraph.textContent = paragraph.textContent.slice(0, characterLimit) + "...";
  }
}
///////////////////// END OF WORD LIMIT FOR FEEDBACKS /////////////////////////