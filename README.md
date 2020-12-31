# ISO8583-JSON-JavaScript
Building and parsing ISO8583 on JavaScript

```javasript
var ori = '0200B23A400108818000000000001000010A370000000000000000112707241600000414241311281128601204alto000000000248KOI             034PI06054501CN12522030064594AC042500360071234567123eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBTFRPIiwiZXhwIjoxNjA2NzIyMTI5fQ.tyJ5WjfiuuG3AH5ugaXlNNXPlZocDJnPpsnC7x-12_M00009071234567';
            var a = new RoyISO8583();
            a.parse(ori);
            var b = new RoyISO8583();
            var values = a.listValue();
            b.setType(a.getType());
            for(var i in values)
            {
                b.addBit(values[i].key, values[i].value)
            }
            var copy = b.getISO();

            console.log(a.getBitmap())
            console.log(b.getBitmap())
            console.log(a.getBody())
            console.log(b.getBody())

            console.log(ori)
            console.log(copy)
            console.log(a.listValue())
            console.log(b.listValue())
            if(ori == copy)
            {
                console.log('Equal');
            }
            console.log(a.getData());
            console.log(a.getData(3));
   ```
