const md5 = require('md5');

module.exports = input => {
  let password = '';
  let index = 0;
  const start = Date.now();
  input = input.replace(/\s/g, '');

  while (password.length < 8) {
    let nextCharacter;

    do {
      const hash = md5(`${input}${index}`);
      index++;

      if (hash.startsWith('00000')) {
        nextCharacter = hash[5];
      }
    } while (!nextCharacter)
    password += nextCharacter;
  }

  console.log(`runtime was ${(Date.now() - start)/1000}s`);

  return password;
}