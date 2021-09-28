window.onload = function(){
	// Variables
	var date = new Date();//get today's date
	var day = date.getDay();//get today's day	
	var days= document.getElementById('section-div1').getElementsByTagName('a');
	desc = document.getElementById('specialdesc');
	var img= document.getElementById('drinkimg');	
	setData();
	// This function will set data according to system date
	function setData () {
		for (var i=0; i<days.length; i++)
		{
			var div= document.getElementById(i);
			if(i == day)
			{
				setImage(i);
				div= document.getElementById(i);			
				desc.innerHTML = div.innerHTML;
			}
		}	
	}
	// calling functions on mouse hover and mouse out
	days[0].onmouseover = exchangeData;	
	days[0].onmouseout = setData;
	days[1].onmouseover = exchangeData;
	days[1].onmouseout = setData;
	days[2].onmouseover = exchangeData;
	days[2].onmouseout = setData;
	days[3].onmouseover = exchangeData;
	days[3].onmouseout = setData;
	days[4].onmouseover = exchangeData;
	days[4].onmouseout = setData;
	days[5].onmouseover = exchangeData;
	days[5].onmouseout = setData;
	days[6].onmouseover = exchangeData;	
	days[6].onmouseout = setData;
	// It'll replace data according to hover
	function exchangeData () {	
		for (var k=0; k<7; k++)
		{			
			if(this.innerHTML==days[k].innerHTML)
			{
				setImage(k);
				var temp= document.getElementById(k);
				desc.innerHTML = temp.innerHTML;
			
			}
		}		
	}
	// It'll set images according to hover
	function setImage (k) {		
			if (k==0)
			{
				img.src='images/pimms.jpg';
			}
			if (k==1)
			{
				img.src='images/margarita.jpg';
			}
			if (k==2)
			{
				img.src='images/cosmopolitan.jpg';
			}
			if (k==3)
			{
				img.src='images/negroni.jpg';
			}
			if (k==4)
			{
				img.src='images/mojito.jpg';
			}
			if (k==5)
			{
				img.src='images/whiskey.jpg';
			}
			if (k==6)
			{
				img.src='images/milano.jpg';
			}		
	}
}
