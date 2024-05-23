
function changeText() {
    document.getElementById("demo").innerHTML = "Hello, JavaScript!";
}


function askName() {
    name = prompt("Hva heter du?");
    alert("Hei, " + name + "!");
}

document.getElementById("eventButton").addEventListener("click", function() {
    alert("Knappen ble klikket!");
});
