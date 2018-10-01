const translate = require('google-translate-api');

translate('tumi hamake jano', {to: 'hi'}).then(res => {
    console.log(res.text);
   
    console.log(res.from.language.iso);
    
}).catch(err => {
    console.error(err);
});