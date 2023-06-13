function calculateBmi(height, weight) {
  if (height.trim() === '' || weight.trim() === '') {
    alert('Please fill all inputs!');

    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  if (isNaN(height) || isNaN(weight)) {
    alert('Height and Weight should be a number');

    return false;
  }

  if (weight < 0 || height < 0) {
    alert('Height and Weight should be grater than 0');

    return false;
  }
    height = height / 100;
    let result = weight / (height * height);
  
    return result.toFixed(2);
  }

  export default calculateBmi;