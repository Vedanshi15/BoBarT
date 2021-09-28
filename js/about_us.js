

window.onload = pageReady;


function pageReady() {

  //call to elements
  var bigImage = document.getElementById("mainImage");
  var image1 = document.getElementById("pic1");
  var image2 = document.getElementById("pic2");
	var image3 = document.getElementById("pic3");
	var image4 = document.getElementById("pic4");
	var image5 = document.getElementById("pic5");

  // Listeners for on hover effect for images
  image1.onmouseover = switchPic1;
	image2.onmouseover = switchPic2;
	image3.onmouseover = switchPic3;
  image4.onmouseover = switchPic4;
	image5.onmouseover = switchPic5;
  
  // functions to change the image when hovered over
  function switchPic1(){
		bigImage.src = image1.src;
	}

	function switchPic2(){
		bigImage.src = image2.src;
	}

	function switchPic3(){
		bigImage.src = image3.src;
	}
  
  function switchPic4(){
    bigImage.src = image4.src;
  }
  
  function switchPic5() {
    bigImage.src = image5.src;
  }
  
  //Timer for image so that it will default back into the logo after 10 seconds passed
  var mainLogo = setInterval(switchPic5, 10000);
}

