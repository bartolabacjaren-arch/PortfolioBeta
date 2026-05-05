function calculate () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        document.getElementById("diff").innerHTML = "";
        document.getElementById("prod").innerHTML = "";
        document.getElementById("quo").innerHTML = "";
        document.getElementById("mod").innerHTML = "";
        return;
    }

    const sum = num1 + num2;
    const diff = num1 - num2;
    const prod = num1 * num2;
    const quo = num1 / num2;
    const mod = num1 % num2;

    document.getElementById("sum").innerHTML = "The sum is: " + sum.toFixed(2);
    document.getElementById("diff").innerHTML = "The difference is: " + diff.toFixed(2);
    document.getElementById("prod").innerHTML = "The product is: " + prod.toFixed(2);
    document.getElementById("quo").innerHTML = "The quotient is: " + quo.toFixed(2);
    document.getElementById("mod").innerHTML = "The remainder is: " + mod.toFixed(2);
}

function clearFields() {
    document.getElementById("sum").innerHTML = "";
    document.getElementById("diff").innerHTML = "";
    document.getElementById("prod").innerHTML = "";
    document.getElementById("quo").innerHTML = "";
    document.getElementById("mod").innerHTML = "";
}