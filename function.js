// function pythagroeanTheorem(a, b) {
//   let hypotenuse;

//   hypotenuse = a ** 2 + b ** 2
//   console.log(Math.sqrt(hypotenuse))
// }

// pythagroeanTheorem(3, 4)

function bmiCalculator(weight, height) {
  let bmi = weight / (height ** 2)      
  return Math.round(bmi)
}

bmiCalculator(65, 1.8)