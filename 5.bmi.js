function calculateBMI() {
      var weight = document.getElementById('weight').value;
      var height = document.getElementById('height').value;
  
      if (weight === '' || height === '') {
          alert("Please fill in both weight and height");
          return;
      }
  
      var bmi = (weight / ((height * height) / 10000)).toFixed(2);
      var resultDiv = document.getElementById('result');
      resultDiv.innerHTML = 'Your BMI is: ' + bmi;
  
      var category = '';
      if(bmi < 18.5) {
          category = 'Underweight';
      } else if(bmi >= 18.5 && bmi < 25) {
          category = 'Normal weight';
      } else if(bmi >= 25 && bmi < 30) {
          category = 'Overweight';
      } else {
          category = 'Obese';
      }
  
      resultDiv.innerHTML += '<br>Your BMI category is: ' + category;
  
      // Create a "Click Here" button
      var button = document.createElement('button');
      button.textContent = 'Click Here for Diet Plan';
      button.onclick = function() {
          // Redirect to the diet plan page based on BMI category
          if (bmi < 18.5) {
              window.location.href = 'underweight_diet.html';
          } else if (bmi >= 18.5 && bmi < 25) {
              window.location.href = 'normal_weight_diet.html';
          } else if (bmi >= 25 && bmi < 30) {
              window.location.href = 'overweight_diet.html';
          } else {
              window.location.href = 'obese_diet.html';
          }
      };
  
      resultDiv.appendChild(button);
  }
  