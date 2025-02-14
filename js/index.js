function billinfo() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    const pay = parseInt(document.getElementById("pay").value) || 0;
    
    const totalFees = 8500;
    const dueFees = totalFees - pay;

    // checking if the feesPaid is greater than 8500
    if (pay > totalFees) {
        alert("The payment amount exceeds the total fee. Please enter a valid amount.");
        
        // Disable if condition satisfies
        document.getElementById("name").disabled = true;
        document.getElementById("address").disabled = true;
        document.getElementById("phone").disabled = true;
        document.getElementById("course").disabled = true;
        document.getElementById("pay").disabled = true;
        document.querySelector("button").disabled = true; // Disable the button if condition satisfies
        
        return;
    }

    // Printing the details in receipt
    document.getElementById("namePlace").innerHTML = name;
    document.getElementById("addressPlace").innerHTML = address;
    document.getElementById("phonePlace").innerHTML = phone;
    document.getElementById("coursePlace").innerHTML = course;

 
    document.getElementById("feesPaid").innerHTML = `Rs. ${pay}/-`;

    if (dueFees > 0) {
        document.getElementById("payDue").innerHTML = `Rs. ${dueFees}/-`;
    } else {
        document.getElementById("payDue").innerHTML = "No Due";
    }


    document.getElementById("receipt").style.display="block"
}
