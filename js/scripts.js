function hideResults() {
  document.getElementById("Side1").setAttribute("class", "hidden");
  document.getElementById("Side2").setAttribute("class", "hidden");
  document.getElementById("Side3").setAttribute("class", "hidden");
}

function add(num1, num2, num3) {
  return num1 + num2 <= num3;
}

//UI Logic//
function handleCalculation(event) {
  event.preventDefault();
  const Side1 = parseInt(document.querySelector("input#Side1").value)
  const Side2 = parseInt(document.querySelector("input#Side2").value)
  const Side3 = parseInt(document.querySelector("input#Side3").value)

  let result;
  if (Side1 === Side2 && Side2 === Side3) {
    document.getElementById("Equilateral").removeAttribute("class");
    result = "Equilateral";
  } else if (Side1 === Side2 && Side2 != Side3 && Side1 != Side3) {
    document.getElementById("Isosceles").removeAttribute("class");
    result = "Isosceles";
  }



  document.getElementById("output").innerText = result; 
}

window.addEventListener("load", function() {
  const form = document.getElementById("Triangles");
  form.addEventListener("submit", handleCalculation);
});