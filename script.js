function predictLoan(){

let income = Number(document.getElementById("income").value);
let loan = Number(document.getElementById("loan").value);
let credit = document.getElementById("credit").value;

let output = document.getElementById("output");
let message = document.getElementById("message");
let confidence = document.getElementById("confidence");
let risk = document.getElementById("risk");
let resultBox = document.getElementById("resultBox");
let icon = document.querySelector(".icon");

resultBox.classList.remove("approved");
resultBox.classList.remove("rejected");

if(income==0 || loan==0){

output.innerHTML="Please Enter Details";

message.innerHTML="Fill all the required fields.";

confidence.innerHTML="--";

risk.innerHTML="--";

icon.innerHTML='<i class="fa-solid fa-circle-info"></i>';

return;

}

if(income>=3000 && loan<=500000 && credit=="Good"){

resultBox.classList.add("approved");

icon.innerHTML='<i class="fa-solid fa-circle-check"></i>';

icon.style.color="#16a34a";

output.innerHTML="LOAN APPROVED";

output.style.color="#15803d";

message.innerHTML="Congratulations! The applicant is eligible for loan approval based on the entered details.";

confidence.innerHTML="94%";

risk.innerHTML="Low";

}

else{

resultBox.classList.add("rejected");

icon.innerHTML='<i class="fa-solid fa-circle-xmark"></i>';

icon.style.color="#dc2626";

output.innerHTML="LOAN REJECTED";

output.style.color="#dc2626";

message.innerHTML="The applicant is not eligible for loan approval based on the entered details.";

confidence.innerHTML="82%";

risk.innerHTML="High";

}

}
