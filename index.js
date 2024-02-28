function register() {
    const email = document.getElementById('yourEmail').value;
    const password = document.getElementById('yourPassword').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User registered successfully
        const user = userCredential.user;
        
        const userId = user.uid;

      
      const database = firebase.database().ref('users/' + userId);
      database.set({
        name: document.getElementById('yourName').value,
        email: email,
        
      });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors here
        console.error(errorCode, errorMessage);
      });
  }
  