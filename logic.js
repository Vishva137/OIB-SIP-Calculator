
function DisplayDigit(value) {
    document.getElementById('result').value += value;
}

function DisplayClear() {
    document.getElementById('result').value = "";
}

function DeleteDigit() {
    if (document.getElementById('result').value == "") {
        document.getElementById('result').value = ""
    } else {
        let value = document.getElementById('result').value
        document.getElementById('result').value = value.toString().slice(0, -1)
    }
}

function calculate() {
    if (document.getElementById('result').value == "") {
        document.getElementById('result').value = ""
    } else {
        let digit = document.getElementById('result').value
        let equal = eval(digit)
        document.getElementById('result').value = equal
    }
}
