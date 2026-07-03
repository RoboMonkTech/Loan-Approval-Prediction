function predictLoan() {

    let name = document.getElementById("name").value;
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

    if (name == "" || income == 0 || loan == 0) {

        output.innerHTML = "Incomplete Details";

        message.innerHTML = "Please enter Applicant Name, Income and Loan Amount.";

        confidence.innerHTML = "--";

        risk.innerHTML = "--";

        icon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
        icon.style.color = "#2563eb";

        return;
    }

    // Loan Approval Logic
    if (
        income >= 500000 &&
        loan <= income * 2 &&
        credit == "Good"
    ) {

        resultBox.classList.add("approved");

        icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        icon.style.color = "#16a34a";

        output.innerHTML = "LOAN APPROVED";
        output.style.color = "#15803d";

        message.innerHTML =
            "Congratulations <b>" +
            name +
            "</b>! Your loan application has been approved based on the provided details.";

        confidence.innerHTML = "94%";
        risk.innerHTML = "Low";

    }

    else {

        resultBox.classList.add("rejected");

        icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        icon.style.color = "#dc2626";

        output.innerHTML = "LOAN REJECTED";
        output.style.color = "#dc2626";

        message.innerHTML =
            "Sorry <b>" +
            name +
            "</b>. Your loan application is not eligible based on the entered details.";

        confidence.innerHTML = "82%";
        risk.innerHTML = "High";

    }

}
