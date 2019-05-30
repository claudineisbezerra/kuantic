/** Internationalization in server-side*/
const path = require('path');
const i18n = require('i18n');
i18n.configure({
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    queryParameter: 'lang',
    directory: path.join('./', 'locales'),
    api: {
        // eslint-disable-next-line prettier/prettier
        '__': '$t', //now req.__ becomes req.$t
        // eslint-disable-next-line prettier/prettier
        '__n': '$tn'
    }
});

module.exports = i18n;
