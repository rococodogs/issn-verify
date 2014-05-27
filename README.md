# issn-verify

checks if an issn number is valid with regex and by confirming the check digit. regex and algorithm via [http://en.wikipedia.org/wiki/International\_Standard\_Serial\_Number](http://en.wikipedia.org/wiki/International_Standard_Serial_Number)

## usage

```javascript
var issn = require('issn-verify');
var test = "0000-000X";

if ( issn(test) ) {
    // do something with a valid issn
} else {
    // do something with an invalid issn
}
```

## license
MIT