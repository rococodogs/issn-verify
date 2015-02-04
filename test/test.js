var test = require('tape');
var issn = require('../issnVerify');

test('returns false for non-matching numbers', function(t) {
    t.notOk(issn('000000000'));
    t.end();
});

test('matches oclc examples', function(t) {
    var ex = [
        '7369956'
      , '07369956'
      , '0736-9956'
    ];

    ex.forEach(function(num) {
        t.ok(issn(num));
    });

    t.end();
});

test('works with "X" check digit', function(t) {
    t.ok(issn('1550-235X'));
    t.end()
});

test('rejects strings', function(t) {
    t.notOk(issn('a123-4567'));
    t.end();
})
