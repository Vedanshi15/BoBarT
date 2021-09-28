window.onload = function(){
	// getting form
	var formHandle = document.forms.Contact;
	// calling function on submit event
	formHandle.onsubmit = processForm;
	// It'll get data from form and display it on div 
	function processForm(){
		var name = formHandle.name;
		var email = formHandle.email;
		var comment = formHandle.comment;
		var thanksMsgDiv = document.getElementById("section-div2");
		//Validation
		if(name.value==="")
		{
			name.style.background="red";
			name.focus();			
			return false;
		}
		if(email.value==="")
		{
			email.style.background="red";
			email.focus();
			return false;
		}
		if(comment.value==="")
		{
			comment.style.background="red";
			comment.focus();
			return false;
		}
		formHandle.classList.add("section-div2");
		thanksMsgDiv.innerHTML="<p>Thank you!! " + name.value +" </p>" + "<span>Your message has been sent.</span> "
		
	}
}