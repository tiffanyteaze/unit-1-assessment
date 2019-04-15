let num = 0;

function add() {
    let value = parseInt(document.getElementById('input').value);
    num = value + num;
    document.getElementById("h1").innerHTML = num;
}

function minus() {
    let value = parseInt(document.getElementById('input').value);
    console.log(value)
    console.log(typeof value)
    num = num - value;
    document.getElementById("h1").innerHTML = num;
}

document.getElementById("h1").innerHTML = num;
document.getElementById("plus").addEventListener("click", add);
document.getElementById("minus").addEventListener("click", minus);