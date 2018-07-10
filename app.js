const data = require('./data.json');

const parser = module.exports = {};
// attrs will contain firstName, lastName, middleName, fullName
parser.parseName = function (name) {
    const tokens = name.trim().split(/\s+/).map(w => w.toProperCase());
    const attrs = {};
    
    if (!tokens.length) {
        return attrs;
    }

    if (tokens.length === 1) {
        attrs.firstName = token[0];
        return attrs;
    }

    // check if chinese name first
    for (token of tokens) {
        if (data.chineseSurnames.includes(token)) {
            return parseChineseName(tokens, token);
            break;
        }
    }
    return attrs;
}

parseChineseName = function(tokens, surname) {
    // parse names by number of words
    const attrs = {};
    switch(tokens.length) {
        case 2:
            // first last or last first
            attrs.firstName = tokens.filter(w => w !== surname)[0];
            attrs.lastName = surname;
            break;
        case 3:
            // first first last, last first first, first last first (to fix)
            console.log('sh')
            const firstNames = tokens.filter(w => w !== surname);
            attrs.firstName = firstNames.join(' ');
            attrs.lastName = surname;
            break;
        case 4:
            // first last mid mid or last mid mid first
            break;
        default:
    }
    return attrs;
}

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};