(function () {
    var takePicture = document.querySelector("#form__img--take"),
        showPicture = document.querySelector("#form__img--show");

    if (takePicture && showPicture) {
        takePicture.onchange = function (event) {
            var files = event.target.files,
                file;
            if (files && files.length > 0) {
                file = files[0];
                try {
                    var URL = window.URL || window.webkitURL;
                    var imgURL = URL.createObjectURL(file);
                    showPicture.src = imgURL;
                    URL.revokeObjectURL(imgURL);
                }
                catch (e) {
                    try {                        
                        var fileReader = new FileReader();
                        fileReader.onload = function (event) {
                            showPicture.src = event.target.result;
                        };
                        fileReader.readAsDataURL(file);
                    }
                    catch (e) {
                        var error = document.querySelector("#error");
                        if (error) {
                            error.innerHTML = "Neither createObjectURL or FileReader are supported";
                        }
                    }
                }
            }
        };
    }
})();

function launchFullscreen(element) {
	if(element.requestFullscreen) {
	  element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
	  element.mozRequestFullScreen();
	} else if(element.webkitRequestFullscreen) {
	  element.webkitRequestFullscreen();
	} else if(element.msRequestFullscreen) {
	  element.msRequestFullscreen();
	}
  }

  function cadastro(id,name,email,phone){
	  this.id = id;
	  this.name = name;
	  this.email = email;
	  this.phone = phone;
  }

cadastro();
var cadUser;
var id = 1;

  function add_user(){
	inputName = document.getElementsByName('name')[0].value;
	inputEmail = document.getElementsByName('email')[0].value;
	inputPhone = document.getElementsByName('phone')[0].value;

	const user = [inputName,inputEmail,inputPhone];

	let [name,email,phone] = user;

	cadUser = new cadastro(id,name,email,phone);
	
	console.log(id);
	console.log(name);
	console.log(email);
	console.log(phone);

	id++;
	
	event.preventDefault();
  }