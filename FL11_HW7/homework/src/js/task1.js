let email = prompt('Enter your email here','email@email.email');
let pass;
let changePass;
let oldPass;
let newPass;
let recheckNewPass;
let emailMin = 6;
let passMin = 5;

if(!email) {
  alert('Canceled');
} else if(email.length < emailMin) {
  alert("I don't know any emails having name length less than 6 symbols");
} else if(email === 'user@gmail.com' || email === 'admin@gmail.com') {
  pass = prompt('Enter your password here', 'your password');
    if(!pass) {
      alert('Canceled');
      } else if(email === 'user@gmail.com' && pass === 'UserPass' || 
          email === 'admin@gmail.com' && pass === 'AdminPass') {
        changePass = confirm('Do you want to change your password?');
        if(!changePass) {
          alert('You have failed the change.');
        } else {
          oldPass = prompt('Enter your old password here', 'your old password');
          if (!oldPass) {
            alert('Canceled!')
          } else if ( oldPass === pass) {
            newPass = prompt('Enter your new password here', 'your new password');
            if (newPass < passMin) {
              alert('It’s too short password. Sorry.');
            } else {
              recheckNewPass = prompt('Re-enter your new password','your new password');
              if (recheckNewPass === newPass) {
                alert('You have successfully changed your password.');
              } else {
                alert('You wrote the wrong password.');
              }
            }
          }
        }
      } else {
      alert('Wrong password');
    }
  } else {
  alert('I don’t know you');
} 

