

<h1><a href="/">My Contact Page</a></h1>
  
<body class="body-contact">


	
	<div class="container container-style">
		<h1 class="h1-contact">Contact Us</h1>
		<form onsubmit="customAlert.allert('Your response is recorded successfully','Congratulation!')" disabled name="submit-btn">
		  <div class="form-group">
			<label class="label-contact" for="name">Name</label>
			<input type="text" name="name" class="form-control input" id="myText" placeholder="Enter your name" name="name" maxlength="20" onkeyup="this.value = this.value.toUpperCase()" required>
			<p id="warning"></p>
		  </div>
		  <div class="form-group">
			<label class="label-contact" for="email">Email address</label>
			<input type="email"name="email" class="form-control input"id="myT" maxlength="40"  placeholder="Enter your email" onkeyup="this.value = this.value.toUpperCase()" required>
			<p id="warn"></p>
		  </div>
		  <div class="form-group">
			<label class="label-contact" for="message">Message</label>
			<textarea name="message" class="form-control input" id="my" maxlength="40" rows="5" placeholder="Write something here....." required></textarea>
			<p id="war"></p>
		  </div>
	<input type="submit" id="button" class="btn btn-success rab" onclick="display()"  ></button>
		</form>
	
	  </div>
</body>

  <a href="https://fitness-webapp.onrender.com/home" target="_blank" class="read-article">
	Read more 👉
  </a>



