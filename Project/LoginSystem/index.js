const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
      
    
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;
    
        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user)
        })    
})

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user signed out")
    })
});
