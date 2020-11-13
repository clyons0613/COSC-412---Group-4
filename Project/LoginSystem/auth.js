auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User is logged in ", user);
    window.location = '/Project/Frontend/index.html'
  } else {
    console.log("User is logged out");
  }
  
})



const signupForm = document.querySelector("#register");
signupForm.addEventListener("submit" , (e) => {
  e.preventDefault();

  
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
  });
  
});


const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      
    })
});

