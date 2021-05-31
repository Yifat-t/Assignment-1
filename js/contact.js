window.onload = gonow;

function gonow(){
	var formHandle = document.forms.contactForm;
		
	
	formHandle.onsubmit = procesform;
	
	function procesform(){
		var firstName = document.getElementById("firstName");
		
		if(!firstName.value){
			firstName.style.background = "red";
			firstName.focus();		
			return false;
		}	
		
		
		var lastName = document.getElementById("lastName");
		if(!lastName.value){
			lastName.style.background = "red";
			lastName.focus();		
			return false;
		}
		
		
		var emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		var emailAddress = document.getElementById("email");
		if(!emailAddressPattern.test(emailAddress.value)){
			emailAddress.style.background = "red";
			emailAddress.focus();		
			return false;
		}
		
		var phonePattern = /^[0-9]{10}$/;
		var phone = document.getElementById("phoneNumber");
		if(!phonePattern.test(phone.value)){
			phone.style.background = "red";
			phone.focus();		
			return false;
		}
		
		
		
		

		
		formHandle.style.display = "none";
		document.getElementById("thanks_msg").style.display = "block";
	
		thanksCustomer.innerHTML = firstName.value +" " + lastName.value;
		
		cust_email.innerHTML = emailAddress.value;
		cust_phone.innerHTML = phone.value;
		
		
		return false;
		
	}
	
	
	
  	
}


