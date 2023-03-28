function display(){
	
	var x = document.getElementById("myText").value;
	var y = document.getElementById("myT").value;
	var z = document.getElementById("my").value;
 
		
		if(x==null || x==""){
	     document.getElementById("warning").innerHTML= "Please Write Something" ;
		 warning.style.color="red";
		 document.getElementById("myText").style.borderColor="red";
		}
	
		if(y=null || y==""){
		      document.getElementById("warn").innerHTML= "Please Write Something" ;
		 warn.style.color="red";
		 document.getElementById("myT").style.borderColor="red";
		}
		   
		if(z==null || z=="")
		{
			document.getElementById("war").innerHTML= "Please Write Something" ;
		 war.style.color="red";
		 document.getElementById("my").style.borderColor="red";
		}

		
           
     

			
            
}

function CustomAlert(){
	this.allert = function(message,title){
	  document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
  
	  let dialogoverlay = document.getElementById('dialogoverlay');
	  let dialogbox = document.getElementById('dialogbox');
	  
	  let winH = window.innerHeight;
	  dialogoverlay.style.height = winH+"px";
	  
	  dialogbox.style.top = "100px";
  
	  dialogoverlay.style.display = "block";
	  dialogbox.style.display = "block";
	  
	  document.getElementById('dialogboxhead').style.display = 'block';
  
	  if(typeof title === 'undefined') {
		document.getElementById('dialogboxhead').style.display = 'none';
	  } else {
		document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
	  }
	  document.getElementById('dialogboxbody').innerHTML = message;
	  document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
	}
	
	this.ok = function(){
	  document.getElementById('dialogbox').style.display = "none";
	  document.getElementById('dialogoverlay').style.display = "none";
	}
  }
  
  let customAlert = new CustomAlert();
	



