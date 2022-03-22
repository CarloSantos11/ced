// A function is a reusable block of code
// You may want to have repeatable logic
// Or logic that follows a certain patter.

// If you want to you can use parameters to 
// define variables that you can pass to your function.

// Below is an example of a function taking two parameters
// a and b, where a and b are the two shorter sides of a 
// right triangle. The functions prints the hypotenuse of
// the triangle.

function pythagroeanTheorem(a, b) {
  let hypotenuse;

  hypotenuse = a ** 2 + b ** 2
  console.log(Math.sqrt(hypotenuse))
}

// pythagroeanTheorem(3, 4) // UNCOMMENT this call TO RUN THE CODE

function bmiCalculator(weight, height) {
  let bmi = weight / (height ** 2)
  return Math.round(bmi)
}

// bmiCalculator(65, 1.8) // UNCOMMENT this call TO RUN THE CODE