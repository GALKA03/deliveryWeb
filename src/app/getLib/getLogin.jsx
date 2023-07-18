 export const handleLogin = async(setIsLogin)  => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
            password: '55555',
     
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
console.log("token",token)
        // Set the login state to true
        setIsLogin(true);
      } else {
        console.log('Login failed');
      }
    } catch (err) {
      console.log(err);
    }
  };