# issn-verify

checks if an issn number is valid with regex and by confirming the check digit. regex and algorithm via [http://en.wikipedia.org/wiki/International\_Standard\_Serial\_Number](http://en.wikipedia.org/wiki/International_Standard_Serial_Number)

## usage

### via node/io.js

```javascript
var issn = require('issn-verify');
var test = "0000-000X";

if ( issn(test) ) {
    // do something with a valid issn
} else {
    // do something with an invalid issn
}
```

### in html
```html
<script src="/path/to/issnVerify.js"></script>
<script>
    var input = document.getElementById('issn')
      , issn = null
      ;

    input.addEventListener('blur', function(e) {
        issn = e.target.value;
        if ( issn && !issnVerify(issn) ) {
            // do something
        }
    });
</script>
```

## license
MIT
