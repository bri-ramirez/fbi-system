const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch(`/SignIn?email=${email}&password=${password}`);
    const data = await response.json();
    
    if (data.token) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('agente', JSON.stringify(data.loggedUser));
      window.location.href = '/profile?token=' + data.token;
    }
  } catch (error) {
    window.location.href = '/';
  }
});
