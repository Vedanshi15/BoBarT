

window.onload = function() {
  
  // Call to form
  var formHandle = document.forms.careerForm;
    
  // Call to thanks msg
  var thanksMsg = document.getElementById("thank_userMsg");
  var thanksUser = document.getElementById("thank_user");
  
  // Call to form ids
  var nameFirstError = document.getElementById("user_fname");
  var nameLastError = document.getElementById("user_lname");
  var emailError = document.getElementById("user_email");
  var phoneError = document.getElementById("user_phone");
  
  //Regex
  var emailRegex = /^\w+@\w\w+.\w\w+$/i;
  var phoneRegex = /^[1-9]\d{2}-\d{3}-\d{4}/;
  
  formHandle.onsubmit = processForm;
  
  function processForm() {
  
    // Grabs values from the form
    var nameFirstValue = formHandle.user_fname;
    var nameLastValue = formHandle.user_lname;
    var emailValue = formHandle.user_email;
    var phoneValue = formHandle.user_phone;
    
    if(nameFirstValue.value === "" || nameFirstValue.value === null)
    {
      nameFirstError.style.background = "red";
      nameFirstValue.focus();
      return false;
    }
    
    if(nameLastValue.value === "" || nameLastValue.value === null)
    {
      nameLastError.style.background = "red";
      nameLastValue.focus();
      return false;
    }
    
    if(!emailRegex.test(emailValue.value))
    {
      emailError.style.background = "red";
      emailValue.focus();
      return false;
    }
    
    if(!phoneRegex.test(phoneValue.value))
    {
      phoneError.style.background = "red";
      phoneValue.focus();
      return false;
    }
    // End of order
    
    // Form is change
    formHandle.style.display = "none";
    thanksMsg.style.display = "block";
    
    thanksUser.innerHTML = nameFirstValue.value + " " + nameLastValue.value;
    
    return false;
    
  }
}