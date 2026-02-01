
   const alertMsg = document.querySelector('.alert');
    const error = document.getElementById('error');
    const sendError = document.getElementById('sendError');
    const inputUsername = document.getElementById('inputUsername');
    const inputUsername2 = document.getElementById('inputUsername2');
    const inputUsername3 = document.getElementById('inputUsername3');
    const inputPassword = document.getElementById('inputPassword');
    const inputPassword3 = document.getElementById('inputPassword3');
    const loginBtn = document.getElementById('loginBtn');
    const loginBtn2 = document.getElementById('loginBtn2');
    const cancelBtn = document.getElementById('cancelBtn');
    const resetBtn = document.getElementById('resetBtn');
    const exitBtn = document.getElementById('exitBtn');

    document.addEventListener('click', (e) => {
        if (e.target.id && e.target.id.includes('loginBtn2')) {
      e.preventDefault();
        let username = inputUsername3.value;
        let pwd = inputPassword3.value;

        if (username == '' || pwd == '' || !isNaN(Number(username)) || !isNaN(Number(pwd))) {
          error.classList.remove('hide');
          return;
        }
        if(!username.includes('ETS')){
          alertMsg.classList.remove('hide');
          return;
        }
        localStorage.setItem('username', username);
        window.location.href = './home.html';
        
      }
      if (e.target.id && e.target.id.includes('loginBtn')) {
      e.preventDefault();
        let username = inputUsername.value;
        let pwd = inputPassword.value;

        if (username == '' || pwd == '' || !isNaN(Number(username)) || !isNaN(Number(pwd))) {
          alertMsg.classList.remove('hide');
          return;
        }
        if(!username.includes('ETS')){
          alertMsg.classList.remove('hide');
          return;
        }
        localStorage.setItem('username', username);
        window.location.href = './home.html';
        
      }
      if (e.target.id && e.target.id.includes('cancelBtn')) {
        e.preventDefault();
        window.location.reload();
       }
      if (e.target.id && e.target.id.includes('sendBtn')) {
      e.preventDefault();
        let username = inputUsername2.value;

        if (username == '' || !isNaN(Number(username))) {
          sendError.classList.remove('hide');
          return;
        }
        if(!username.includes('ETS')){
          sendError.classList.remove('hide');
          return;
        }
        localStorage.setItem('username', username);
        window.location.href = './home.html';
        
      }
      if (e.target.id && e.target.id.includes('exitBtn')) {
        e.preventDefault();
        window.location.reload();
       }
      
    });

     const account = document.getElementById('account');
   account.textContent = localStorage.getItem('username');