auth.onAuthStateChanged(user => {
    if (user) {
      console.log("User is logged in ", user);
    } else {
      console.log("User is logged out");
    }
  })


const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {

    })
});
