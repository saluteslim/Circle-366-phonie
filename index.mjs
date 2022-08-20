import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 

// Country dropdown script start
var input = document.querySelector("#phone");
            window.intlTelInput(input, {
                separateDialCode: true,
                excludeCountries: ["in", "il"],
                preferredCountries: ["ru", "jp", "pk", "no"]
            });

// country dropdown script end


let mtnArray = ["803", "806", "813", "816", "903", "906"];

let gloArray = ["805", "807", "815", "817", "905", "907"];

let airtelArray = ["802", "902", "701", "808", "708", "812"];

let etisalatArray = ["809", "909", "817" , "818"];


const myInput = document.getElementById('phone');
myInput.addEventListener('input', e => {
  const phoneNumber = e.target.value
  console.log(phoneNumber)
 
  if (mtnArray.includes(phoneNumber)) {
    document.getElementById('phone') .setAttribute("style", "width: 170%");
    document.getElementById('phone-logo').setAttribute("style", " background: url(https://seeklogo.com/images/M/mtn-logo-40644FC8B0-seeklogo.com.png?v=637817245850000000) no-repeat; background-size:contain")
  }

  else if (gloArray.includes(phoneNumber)) {
       document.getElementById('phone') .setAttribute("style", "width: 170%");
    document.getElementById('phone-logo').setAttribute("style", "display:block; background: url(https://upload.wikimedia.org/wikipedia/commons/8/86/Glo_button.png) no-repeat; background-size:contain")
  }

   else if (airtelArray.includes(phoneNumber)) {
       document.getElementById('phone') .setAttribute("style", "width: 170%");
    document.getElementById('phone-logo').setAttribute("style", "display:block; background: url(https://seeklogo.com/images/A/airtel-logo-2F959F4207-seeklogo.com.png) no-repeat; background-size:contain")
  }

      else if (etisalatArray.includes(phoneNumber)) {
       document.getElementById('phone') .setAttribute("style", "width: 170%");
    document.getElementById('phone-logo').setAttribute("style", "display:block; background: url(https://png.pngitem.com/pimgs/s/325-3256498_9-mobile-hd-png-download.png) no-repeat; background-size:contain")
  }

 
  else if (phoneNumber.length < 3) {
      document.getElementById('phone') .setAttribute("style", "width: 200%");
    document.getElementById('phone-logo').setAttribute("style", "display:none");
  } 

});
