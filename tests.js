const {translate} = require('@vitalets/google-translate-api');

const { text } = translate('Привет, мир! Как дела?', { to: 'en' }).then(d=>console.log(d));

console.log(text) // => 'Hello World! How are you?'