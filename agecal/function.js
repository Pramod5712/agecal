function calculateAge() {
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dobDate.getFullYear();
  
    // Check if birthday hasn't occurred yet this year
    if (
      currentDate.getMonth() < dobDate.getMonth() ||
      (currentDate.getMonth() == dobDate.getMonth() &&
        currentDate.getDate() < dobDate.getDate())
    ) {
      age--;
    }
  
    document.getElementById('result').innerHTML = 'Your age is: ' + age;
  }
  
