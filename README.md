<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="https://t4.ftcdn.net/jpg/00/23/28/97/360_F_23289781_3zGqO9BpM7vqEmM7MrFHi09yH6nXuono.jpg" >
	<title>Contact || Samprit</title>  
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="Contact.css">
<script src="Contact.js"></script>
</head>

<script>


$(document).ready(function() {
    $('.input').on('input change', function() {
        if($(this).val() != '') {
            $('.btn').prop('disabled', false);
        } else {
            $('.btn').prop('disabled', true);
        }
    });
});

// let form=document.querySelector("form");
// form.addEventListener('submit',(e)=>{
// 	e.preventDefault();
// 	let data= new FormData(form);
// 	fetch('https://script.google.com/macros/s/AKfycbyTgi1B1QL7zxVb0Dh2Uw6eJch25ln7DPEdIYw4CidQV-EEZJuucHPU22Pdfsc5zM9H/exec',{
// 		method:"POST",
// 		body:data

// 	})
// 	.then(res=>res.json())
// 	.then(data=>console.log(data));
// })


</script>
</head>


  
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
</html>


<!-- const sheets=SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1H1v3RECZc4OIlciqfx5wXBtpa_Gqb5jahuvyJmx5Fx8/edit#gid=0");
const sheet = sheets.getSheetByName("sam");
function doPost(e){
  let data=e.parameter;
  sheet.appendRow([data.name,data.email,data.message]);
  return ContentService.createTextOutput("Success");
} -->


