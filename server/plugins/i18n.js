/** Internationalization in server-side*/
const path = require('path');
const i18n = require('i18n');
i18n.configure({
    locales: ['pt_br', 'en'],
    defaultLocale: 'pt_br',
    queryParameter: 'lang',
    directory: path.join('./', 'i18n'),
    api: {
        // eslint-disable-next-line prettier/prettier
        '__': '$t', //now req.__ becomes req.$t
        // eslint-disable-next-line prettier/prettier
        '__n': '$tn'
    }
});

module.exports = i18n;
