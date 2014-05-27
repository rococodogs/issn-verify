module.exports = function issn(input) {
    var reg = /^\d{4}\-?\d{3}[\dX]$/
      , check
      , num
        ;

    if ( input.length < 8 ) {
        input = pad(input);
    }

    if ( !input.match(reg) ) { 
        return false;
    }

    num = input.substr(0, (input.length - 1))
               .replace(/\-/, '')
               .split('')
               .reverse()
               .reduce(function(prv, cur, idx) {
                    var i = idx + 2;
                    return prv + (cur * i);
                }, 0)
          % 11;

    check = num == 0 ? 0 : 11 - num;

    if ( check == 10 ) {
        check = "X";
    } 

    return check == input.substr(-1);
}

function pad(inp) {
    while ( inp.length < 8 ) {
        inp = "0" + inp;
    }
    return inp;
}
