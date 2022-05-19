
function myfun() {
	//by id
	const username = document.getElementById('username');
	const email = document.getElementById('email');
	const password1 = document.getElementById('password1');
	const password2 = document.getElementById('password2');
	//by class
	const message = document.getElementsByClassName('message');
	const sucess = document.getElementsByClassName('sucess');
	const error = document.getElementsByClassName('error');
	//submit sucess variable//
	let u, e, p1, p2
	//validation for username
	// 	Username consists of alphanumeric characters (a-zA-Z), lowercase, or uppercase.
	// Username allowed of the dot (.), underscore (_), and hyphen (-).
	// The dot (.), underscore (_), or hyphen (-) must not be the first or last character and number .
	// The number of characters must be between 4 to 19.
	var RE_userName = /^[a-zA-Z]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z]$/;
	if (username.value.match(RE_userName)) {
		username.style.borderColor = 'green';
		error[0].style.visibility = 'hidden';
		message[0].style.visibility = 'hidden';
		sucess[0].style.visibility = 'visible';
		sucess[0].style.color = 'green';
		u = 1;
	}
	else {
		username.style.borderColor = 'red';
		message[0].style.visibility = 'visible';
		message[0].style.color = 'red';
		message[0].innerText = "Number or sympol is not allowed in  the beggin or in end";
		error[0].style.visibility = 'visible';
		error[0].style.color = 'red';
		u = 0;
	}
	//email validation//
	var Re_Email=  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
	if (email.value.match(Re_Email)) {
		email.style.borderColor = 'green';
		error[1].style.visibility = 'hidden';
		message[1].style.visibility = 'hidden';
		sucess[1].style.visibility = 'visible';
		sucess[1].style.color = 'green';
		e = 1;
	}
	else {
		email.style.borderColor = 'red';
		message[1].style.visibility = 'visible';
		message[1].style.color = 'red';
		message[1].innerText = "Email cannot be blank";
		error[1].style.visibility = 'visible';
		error[1].style.color = 'red';
		e = 0;
	}
	//validation of password//
	// To check a password between 5 to 10 characters which contain at least
	// one lowercase letter, one uppercase letter, one numeric digit, and one special character like Ss123$$
	var symbol = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
	if (password1.value.match(symbol)) {
		password1.style.borderColor = 'green';
		error[2].style.visibility = 'hidden';
		message[2].style.visibility = 'hidden';
		sucess[2].style.visibility = 'visible';
		sucess[2].style.color = 'green';
		p1 = 1;
	}
	else {
		password1.style.borderColor = 'red';
		message[2].style.visibility = 'visible';
		message[2].style.color = 'red';
		message[2].innerText = "Password must be like Ss123$$";
		error[2].style.visibility = 'visible';
		error[2].style.color = 'red';
		p1 = 0;
	}
	//password check//
	 if (password1.value != password2.value || password2.value == "") {
		password2.style.borderColor = 'red';
		message[3].style.visibility = 'visible';
		message[3].style.color = 'red';
		message[3].innerText = "Password doesnot match";
		error[3].style.visibility = 'visible';
		error[3].style.color = 'red';
		p2 = 0;
	}
	else {
		password2.style.borderColor = 'green';
		error[3].style.visibility = 'hidden';
		message[3].style.visibility = 'hidden';
		sucess[3].style.visibility = 'visible';
		sucess[3].style.color = 'green';
		p2 = 1;
	}
	//return condition//
	if (u == 1 && e == 1 && p1 == 1 && p2 == 1) {
		return true;
	}
	else
		return false;

}