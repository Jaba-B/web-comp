/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-mixed-operators */
export const validator = setTimeout(() => {
  const parent = document.getElementById('app-container');
  const btn = parent.children[4].children[0].children[2].children[1];
  const input = parent.children[4].children[0].children[2].children[0];
  btn.addEventListener('click', () => {
    const validEmailEndings = ['gmail.com', 'outlook.com', 'yandex.ru'];
    const email = input.value;
    const ending = email.substring(email.indexOf('@') + 1);
    const start = email.substring(0, email.indexOf('@'));
    if (ending === validEmailEndings[0] && start.length > 0
            || ending === validEmailEndings[1] && start.length > 0
            || ending === validEmailEndings[2] && start.length > 0) {
      
    } else {
      alert('false');
    }
  }, false);
}, 1000);
