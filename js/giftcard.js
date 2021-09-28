window.onload =  function(){
  var purBtn = document.getElementById("gift");
  var otherBtn = document.getElementById("other");
  other.onclick = function(){
    var otherInput =  document.getElementById("otherValue");
    otherInput.style.display = "block";
  }
  purBtn.onsubmit = function(){

    var giftInfo = document.getElementById("giftInformation");
    var perInfo = document.getElementById("perInfo");
    var giftValue = document.querySelector('input[name="value"]:checked').value;
    if(giftValue === "other"){
      giftValue = document.getElementById("other-value").value;
      var reg = /^[0-9]+$/
      if(!reg.test(giftValue) || giftValue <= 0){
        alert("Please enter a valid value.");
        return false;
      }
    }
    giftInfo.style.display = "none";
    perInfo.style.display = "flex";
    var subBtn =  document.getElementById("personalInfo");
    subBtn.onsubmit = function(){
      var userfName = document.getElementById("fname");
      var userEmail = document.getElementById("email");
      var userAdd = document.getElementById("address");

      if(userfName.value === "" || userfName.value === null){
        userfName.placeholder = "Please enter a valid name";
        userfName.style.backgroundColor = "#08d5bf";
      } else if(userAdd.value === "" || userAdd.value === null){
        userAdd.placeholder = "Please enter a valid address";
        userAdd.style.backgroundColor = "#08d5bf";
      }else{
      userfName.style.backgroundColor = "#fff";
      userAdd.style.backgroundColor = "#fff";
      userEmail.style.backgroundColor = "#fff";
      var mess = document.getElementById("messBox");
      perInfo.style.display = "none";
      mess.style.display = "flex";
      document.getElementById("userName").innerHTML = userfName.value;
      document.getElementById("giftCardValue").innerHTML = "$" + giftValue + "CAD";
      document.getElementById("userAddress").innerHTML = userAdd.value;
      document.getElementById("userEmailAdd").innerHTML = userEmail.value;
      }
      return false;
    }
    return false;
  }
}
