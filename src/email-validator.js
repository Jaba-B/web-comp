/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-mixed-operators */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-else-return */

export function validate(email) {
  const validEmailEndings = ['gmail.com', 'outlook.com', 'yandex.ru'];
  const ending = email.substring(email.indexOf('@') + 1);
  const start = email.substring(0, email.indexOf('@'));
  if (ending === validEmailEndings[0] && start.length > 0
            || ending === validEmailEndings[1] && start.length > 0
            || ending === validEmailEndings[2] && start.length > 0) {
    return true;
  }
  return false;
}

export function validateAsync(email) {
  const validEmailEndings = ['gmail.com', 'outlook.com', 'yandex.ru'];
  const ending = email.substring(email.indexOf('@') + 1);
  return new Promise((res, rej) => {
    if (ending === validEmailEndings[0]
      || ending === validEmailEndings[1] || ending === validEmailEndings[2]) {
      res(true);
    } else {
      rej(false);
    }
  });
}

export function validateWithThrow(email) {
  const validEmailEndings = ['gmail.com', 'outlook.com', 'yandex.ru'];
  const ending = email.substring(email.indexOf('@') + 1);
  if (ending === validEmailEndings[0]
    || ending === validEmailEndings[1] || ending === validEmailEndings[2]) {
    return true;
  } else {
    throw Error('email is invalid');
  }
}

export function validateWithLog(email) {
  const validEmailEndings = ['gmail.com', 'outlook.com', 'yandex.ru'];
  const ending = email.substring(email.indexOf('@') + 1);
  const start = email.substring(0, email.indexOf('@'));
  if (ending === validEmailEndings[0] && start.length > 0
            || ending === validEmailEndings[1] && start.length > 0
            || ending === validEmailEndings[2] && start.length > 0) {
    console.log(email);
    return true;
  }
  console.log(email);
  return false;
}
