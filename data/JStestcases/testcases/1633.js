function(expected, found, user_message = '') {
    var message = 'Failure' + (user_message ? ' (' + user_message + ')' : '') +
        ': expected <' + String(expected) + '>, found <' + String(found) + '>.';
    throw new Error(message);
}