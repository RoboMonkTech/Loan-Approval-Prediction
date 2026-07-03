function predictLoan(){

let income = Number(document.getElementById("income").value);
let loan = Number(document.getElementById("loan").value);
let credit = document.getElementById("credit").value;

let output = document.getElementById("output");
let message = document.getElementById("message");
let box = document.getElementById("resultBox");

box.classList.remove("approved");
box.classList.remove("rejected");

if(income>=3000 && loan<=500000 && credit=="Good"){

output.innerHTML="✅ LOAN APPROVED";
output.style.color="green";

message.innerHTML="Congratulations! Based on the entered details, the applicant is eligible for loan approval.";

box.classList.add("approved");

}
else{

output.innerHTML="❌ LOAN REJECTED";
output.style.color="red";

message.innerHTML="The entered details do not satisfy the eligibility criteria for loan approval.";

box.classList.add("rejected");

}

}
