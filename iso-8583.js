var RoyISO8583 = function(){
	this.generalConfig	= {
        1	: ['b', 64, 0],
        2	: ['an', 19, 1],
        3	: ['n', 6, 0],
        4	: ['n', 12, 0],
        5	: ['n', 12, 0],
        6	: ['n', 12, 0],
        7	: ['an', 10, 0],
        8	: ['n', 8, 0],
        9	: ['n', 8, 0],
        10	: ['n', 8, 0],
        11	: ['n', 6, 0],
        12	: ['n', 6, 0],
        13	: ['n', 4, 0],
        14	: ['n', 4, 0],
        15	: ['n', 4, 0],
        16	: ['n', 4, 0],
        17	: ['n', 4, 0],
        18	: ['n', 4, 0],
        19	: ['n', 3, 0],
        20	: ['n', 3, 0],
        21	: ['n', 3, 0],
        22	: ['n', 3, 0],
        23	: ['n', 3, 0],
        24	: ['n', 3, 0],
        25	: ['n', 2, 0],
        26	: ['n', 2, 0],
        27	: ['n', 1, 0],
        28	: ['n', 8, 0],
        29	: ['an', 9, 0],
        30	: ['n', 8, 0],
        31	: ['an', 9, 0],
        32	: ['n', 11, 1],
        33	: ['n', 11, 1],
        34	: ['an', 28, 1],
        35	: ['z', 37, 1],
        36	: ['n', 104, 1],
        37	: ['an', 12, 0],
        38	: ['an', 6, 0],
        39	: ['an', 2, 0],
        40	: ['an', 3, 0],
        41	: ['ans', 16, 0],
        42	: ['ans', 15, 0],
        43	: ['ans', 40, 0],
        44	: ['an', 25, 1],
        45	: ['an', 76, 1],
        46	: ['an', 999, 1],
        47	: ['an', 999, 1],
        48	: ['ans', 119, 1],
        49	: ['an', 3, 0],
        50	: ['an', 3, 0],
        51	: ['a', 3, 0],
        52	: ['an', 16, 0],
        53	: ['an', 18, 0],
        54	: ['an', 120, 0],
        55	: ['ans', 999, 1],
        56	: ['ans', 999, 1],
        57	: ['ans', 999, 1],
        58	: ['ans', 999, 1],
        59	: ['ans', 99, 1],
        60	: ['ans', 60, 1],
        61	: ['ans', 99, 1],
        62	: ['ans', 999, 1],
        63	: ['ans', 999, 1],
        64	: ['b', 16, 0],
        65	: ['b', 16, 0],
        66	: ['n', 1, 0],
        67	: ['n', 2, 0],
        68	: ['n', 3, 0],
        69	: ['n', 3, 0],
        70	: ['n', 3, 0],
        71	: ['n', 4, 0],
        72	: ['ans', 999, 1],
        73	: ['n', 6, 0],
        74	: ['n', 10, 0],
        75	: ['n', 10, 0],
        76	: ['n', 10, 0],
        77	: ['n', 10, 0],
        78	: ['n', 10, 0],
        79	: ['n', 10, 0],
        80	: ['n', 10, 0],
        81	: ['n', 10, 0],
        82	: ['n', 12, 0],
        83	: ['n', 12, 0],
        84	: ['n', 12, 0],
        85	: ['n', 12, 0],
        86	: ['n', 15, 0],
        87	: ['an', 16, 0],
        88	: ['n', 16, 0],
        89	: ['n', 16, 0],
        90	: ['an', 42, 0],
        91	: ['an', 1, 0],
        92	: ['n', 2, 0],
        93	: ['n', 5, 0],
        94	: ['an', 7, 0],
        95	: ['an', 42, 0],
        96	: ['an', 8, 0],
        97	: ['an', 17, 0],
        98	: ['ans', 25, 0],
        99	: ['n', 11, 1],
        100	: ['n', 11, 1],
        101	: ['ans', 17, 0],
        102	: ['ans', 28, 1],
        103	: ['ans', 28, 1],
        104	: ['an', 99, 1],
        105	: ['ans', 999, 1],
        106	: ['ans', 999, 1],
        107	: ['ans', 999, 1],
        108	: ['ans', 999, 1],
        109	: ['ans', 999, 1],
        110	: ['ans', 999, 1],
        111	: ['ans', 999, 1],
        112	: ['ans', 999, 1],
        113	: ['n', 11, 1],
        114	: ['ans', 999, 1],
        115	: ['ans', 999, 1],
        116	: ['ans', 999, 1],
        117	: ['ans', 999, 1],
        118	: ['ans', 999, 1],
        119	: ['ans', 999, 1],
        120	: ['ans', 999, 1],
        121	: ['ans', 999, 1],
        122	: ['ans', 999, 1],
        123	: ['ans', 999, 1],
        124	: ['ans', 255, 1],
        125	: ['ans', 50, 1],
        126	: ['ans', 999, 1],
        127	: ['ans', 999, 1],
        128	: ['b', 16, 0]
    };
	
    this.fields = [];
    this.values = [];
    this.getMaxField = 0;	
    this.segment1 = [0,0];
    this.segment2 = [0,0];
    this.segment3 = [0,0];
    this.type = "0000";

    this._onlyUnique = function(value, index, self) 
    {
        return self.indexOf(value) === index;
    };

    this._arrayUnique = function(arrInput)
    {
        if(typeof this._arrayUnique == 'object')
        {
            return arrInput.filter($this._onlyUnique);
        }
        return arrInput;
    };

    this._strPad = function(value, length, chr, position)
    {
        value = value || '';
        var padLength = length - value.length;
        var pad = '';
        if(padLength > 0)
        {
            while(pad.length < padLength)
            {
                pad += chr;
            }
        }
        if(position == 'STR_PAD_RIGHT')
        {
            return value + pad;
        }
        else
        {
            return pad + value;
        }
    };

    this._sort = function(arrInput)
    {
        var points = arrInput;
        points.sort(function(a, b){
            return a-b
        });
        return arrInput;
    };

    this._keySort = function(obj)
    {
        var keys = Object.keys(obj).sort();
        var sortedObj = {}; 
        for(var i in keys) 
        {
            sortedObj[keys[i]] = obj[keys[i]];
        }  
        return sortedObj;
    };

    this._hexDec = function(hexString)
    {
        return parseInt(hexString, 16);
    };

    this._max = function(arrInput)
    {
        return Math.max.apply(null, arrInput);
    };

	this._binToHex = function(binary) 
	{
        var len=strlen(binary);
        var rows = (len/4)-1;
        if ((len%4)>0) {
                var pad=len+(4-(len%4));
                binary = $this._strPad(binary, pad, "0", 'STR_PAD_LEFT');
                len=strlen(binary);
                rows=(len/4)-1;
        }
        var res = '';
        for (var x=0; x<=rows; x++) {
                var s =(x*4);
                var bins=binary[s].binary[s+1].binary[s+2].binary[s+3];
                var num=$this._baseConvert(bins,2,10);
                if (num>9) 
                {
                        console.log("the string is not a proper binary coded decimal");
                } 
                else 
                {
                        res+=num;
                }
        }
        return res;
	};

    this._baseConvert = function(number, fromBase, toBase) {
        // http://jsphp.co/jsphp/fn/view/base_convert
        // +   original by: Philippe Baumann
        // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
        // *     example 1: base_convert('A37334', 16, 2);
        // *     returns 1: '101000110111001100110100'
        return parseInt(number + '', fromBase | 0).toString(toBase | 0);
    };

    this._sprintf = function()
    {
        //  discuss at: https://locutus.io/php/sprintf/
        // original by: Ash Searle (https://hexmen.com/blog/)
        // improved by: Michael White (https://getsprink.com)
        // improved by: Jack
        // improved by: Kevin van Zonneveld (https://kvz.io)
        // improved by: Kevin van Zonneveld (https://kvz.io)
        // improved by: Kevin van Zonneveld (https://kvz.io)
        // improved by: Dj
        // improved by: Allidylls
        //    input by: Paulo Freitas
        //    input by: Brett Zamir (https://brett-zamir.me)
        // improved by: Rafał Kukawski (https://kukawski.pl)
        //   example 1: sprintf("%01.2f", 123.1)
        //   returns 1: '123.10'
        //   example 2: sprintf("[%10s]", 'monkey')
        //   returns 2: '[    monkey]'
        //   example 3: sprintf("[%'#10s]", 'monkey')
        //   returns 3: '[####monkey]'
        //   example 4: sprintf("%d", 123456789012345)
        //   returns 4: '123456789012345'
        //   example 5: sprintf('%-03s', 'E')
        //   returns 5: 'E00'
        //   example 6: sprintf('%+010d', 9)
        //   returns 6: '+000000009'
        //   example 7: sprintf('%+0\'@10d', 9)
        //   returns 7: '@@@@@@@@+9'
        //   example 8: sprintf('%.f', 3.14)
        //   returns 8: '3.140000'
        //   example 9: sprintf('%% %2$d', 1, 2)
        //   returns 9: '% 2'
        const regex = /%%|%(?:(\d+)\$)?((?:[-+#0 ]|'[\s\S])*)(\d+)?(?:\.(\d*))?([\s\S])/g
        const args = arguments
        let i = 0
        const format = args[i++]
        const _pad = function (str, len, chr, leftJustify) 
        {
            if (!chr) 
            {
                chr = ' '
            }
            const padding = (str.length >= len) ? '' : new Array(1 + len - str.length >>> 0).join(chr);
            return leftJustify ? str + padding : padding + str;
        }
        const justify = function (value, prefix, leftJustify, minWidth, padChar) 
        {
            const diff = minWidth - value.length
            if (diff > 0) 
            {
                // when padding with zeros
                // on the left side
                // keep sign (+ or -) in front
                if (!leftJustify && padChar === '0') 
                {
                    value = [
                        value.slice(0, prefix.length),
                        _pad('', diff, '0', true),
                        value.slice(prefix.length)
                        ].join('');
                } 
                else 
                {
                    value = _pad(value, minWidth, padChar, leftJustify);
                }
            }
            return value;
        }
        const _formatBaseX = function (value, base, leftJustify, minWidth, precision, padChar) {
            // Note: casts negative numbers to positive ones
            const number = value >>> 0
            value = _pad(number.toString(base), precision || 0, '0', false)
            return justify(value, '', leftJustify, minWidth, padChar)
        }
        // _formatString()
        const _formatString = function (value, leftJustify, minWidth, precision, customPadChar) {
            if (precision !== null && precision !== undefined) 
            {
                value = value.slice(0, precision)
            }
            return justify(value, '', leftJustify, minWidth, customPadChar);
        }
        // doFormat()
        const doFormat = function (substring, argIndex, modifiers, minWidth, precision, specifier) {
            let number, prefix, method, textTransform, value
            if (substring === '%%') {
                return '%'
            }
            // parse modifiers
            let padChar = ' ' // pad with spaces by default
            let leftJustify = false
            let positiveNumberPrefix = ''
            let j, l
            for (j = 0, l = modifiers.length; j < l; j++) 
            {
                switch (modifiers.charAt(j)) 
                {
                case ' ':
                case '0':
                    padChar = modifiers.charAt(j);
                    break;
                case '+':
                    positiveNumberPrefix = '+';
                    break;
                case '-':
                    leftJustify = true;
                    break;
                case "'":
                    if (j + 1 < l) 
                    {
                        padChar = modifiers.charAt(j + 1);
                        j++;
                    }
                    break
                }
            }
            if (!minWidth) 
            {
                minWidth = 0;
            } 
            else 
            {
                minWidth = +minWidth
            }
            if (!isFinite(minWidth)) 
            {
                throw new Error('Width must be finite')
            }
            if (!precision) 
            {
                precision = (specifier === 'd') ? 0 : 'fFeE'.indexOf(specifier) > -1 ? 6 : undefined;
            } 
            else 
            {
                precision = +precision;
            }
            if (argIndex && +argIndex === 0) 
            {
                throw new Error('Argument number must be greater than zero');
            }
            if (argIndex && +argIndex >= args.length) 
            {
                throw new Error('Too few arguments');
            }
            value = argIndex ? args[+argIndex] : args[i++];
            switch (specifier) 
            {
            case '%':
            return '%'
            case 's':
                return _formatString(value + '', leftJustify, minWidth, precision, padChar);
            case 'c':
                return _formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, padChar);
            case 'b':
                return _formatBaseX(value, 2, leftJustify, minWidth, precision, padChar);
            case 'o':
                return _formatBaseX(value, 8, leftJustify, minWidth, precision, padChar);
            case 'x':
                return _formatBaseX(value, 16, leftJustify, minWidth, precision, padChar);
            case 'X':
                return _formatBaseX(value, 16, leftJustify, minWidth, precision, padChar).toUpperCase();
            case 'u':
                return _formatBaseX(value, 10, leftJustify, minWidth, precision, padChar);
            case 'i':
            case 'd':
            number = +value || 0;
                // Plain Math.round doesn't just truncate
                number = Math.round(number - number % 1);
                prefix = number < 0 ? '-' : positiveNumberPrefix;
                value = prefix + _pad(String(Math.abs(number)), precision, '0', false);
                if (leftJustify && padChar === '0') {
                    // can't right-pad 0s on integers
                    padChar = ' ';
                }
                return justify(value, prefix, leftJustify, minWidth, padChar);
            case 'e':
            case 'E':
            case 'f': // @todo: Should handle locales (as per setlocale)
            case 'F':
            case 'g':
            case 'G':
                number = +value;
                prefix = number < 0 ? '-' : positiveNumberPrefix;
                method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(specifier.toLowerCase())];
                textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(specifier) % 2];
                value = prefix + Math.abs(number)[method](precision);
                return justify(value, prefix, leftJustify, minWidth, padChar)[textTransform]();
            default:
                // unknown specifier, consume that char and return empty
                return '';
            }
        }
        try 
        {
            return format.replace(regex, doFormat);
        } 
        catch (err) 
        {
            return false;
        }
    };

    this.setValue = function(bit, value)
    {
        if($this.fields.indexOf(bit) == -1)
        {
            $this.fields.push(bit);
        }
        $this.fields = $this._arrayUnique($this.fields);
		if(value !== null)
		{
			if($this.generalConfig[bit][0] == 'n')
			{
				// numeric
				var val = value*1;
				if($this.generalConfig[bit][2] == 0)
				{
					// fix length
					value = $this._sprintf("%0"+$this.generalConfig[bit][1]+"d", val);
				}
			}
			else
			{
				// non numeric
				if($this.generalConfig[bit][2] == 0)
				{
					// fix length
					value = $this._strPad(value, $this.generalConfig[bit][1], ' ', 'STR_PAD_RIGHT');
				}
			}
			$this.values[bit] = value;
		}
		else
		{
			$this.values[bit] = null;
		}
		$this._sort($this.fields);
		$this._keySort($this.values);
    };

	this.getBitmap = function()
	{
        var tmp	= $this._sprintf("%064d", 0).split('');    
        var tmp2	= $this._sprintf("%064d", 0).split('');  
        for(var key in $this.values) 
		{        
            if(key<65) 
			{
                tmp[key-1]	= 1;
            }
            else 
			{
                tmp[0]	= 1;
                tmp2[key-65] = 1;
            }
        }
        var result	= "";
        if(tmp[0]==1) 
		{
            while (tmp2.length > 0) 
			{
                result += $this._baseConvert(tmp2.join('').substr(0, 4), 2, 16);
                tmp2 = tmp2.join('').substr(4, tmp2.length-4).split('');
            }
        }
        var main	= "";
        while (tmp.length > 0) 
		{
            main += $this._baseConvert(tmp.join('').substr(0, 4), 2, 16);
            tmp = tmp.join('').substr(4, tmp.length-4).split('');
        }
        $this._bitmap	= (main+result).toUpperCase();
        
        return $this._bitmap;
	};
	
	this.parse = function(message)
	{
		var segment10Str = "";
		var segment11Str = "";
		var segment10Int = 0;
		var segment11Int = 0;
		
		var segment20Str = "";
		var segment21Str = "";
		var segment20Int = 0;
		var segment21Int = 0;
		
		var segment30Str = "";
		var segment31Str = "";
		var segment30Int = 0;
		var segment31Int = 0;		
		
		var typeStr = message.substr(0, 4);
		$this.type = typeStr;		
		segment10Str = message.substr(4, 8);
		segment11Str = message.substr(12, 8);
		segment10Int = $this._hexDec(segment10Str);
		segment11Int = $this._hexDec(segment11Str);
		
        $this.segment1[0] = segment10Int;
		$this.segment1[1] = segment11Int;

		if($this._sprintf("%08x", ($this.segment1[0] & 0x80000000)) == "80000000")
		{
			segment20Str = message.substr(20, 8);
			segment21Str = message.substr(28, 8);
			segment20Int = $this._hexDec(segment20Str);
			segment21Int = $this._hexDec(segment21Str);
			$this.segment2[0] = segment20Int;
			$this.segment2[1] = segment21Int;
		}		
		if($this._sprintf("%08x", ($this.segment2[0] & 0x80000000)) == "80000000")
		{
			segment30Str = message.substr(36, 8);
			segment31Str = message.substr(44, 8);
			segment30Int = $this._hexDec(segment30Str);
			segment31Int = $this._hexDec(segment31Str);
			$this.segment3[0] = segment30Int;
			$this.segment3[1] = segment31Int;
		}	
		var i = 0;
		var k = 0;
		
		k = $this.segment1[0];
		for(i = 1; i <= 32; i++)
		{
			if($this._sprintf("%08x", (k & 0x80000000)) == "80000000" && i > 1)
			{
				$this.addBit(i);
			}
			k = k - 0x80000000;
			k = k << 1;
		}
		k = $this.segment1[1];
		for(i = 33; i <= 64; i++)
		{
			if($this._sprintf("%08x", (k & 0x80000000)) == "80000000")
			{
				$this.addBit(i);
			}
			k = k - 0x80000000;
			k = k << 1;
		}
		var bitmapLength = 16;
		if($this._sprintf("%08x", ($this.segment1[0] & 0x80000000)) == "80000000")
		{
			bitmapLength = 32;
			k = $this.segment2[0];
			for(i = 65; i <= 96; i++)
			{
				if($this._sprintf("%08x", (k & 0x80000000)) == "80000000")
				{
					$this.addBit(i);
				}
				k = k - 0x80000000;
				k = k << 1;
			}
			k = $this.segment2[1];
			for(i = 97; i <= 128; i++)
			{
				if($this._sprintf("%08x", (k & 0x80000000)) == "80000000")
				{
					$this.addBit(i);
				}
				k = k - 0x80000000;
				k = k << 1;				
			}
			if($this._sprintf("%08x", ($this.segment2[0] & 0x80000000)) == "80000000")
			{
				bitmapLength = 48;
				k = $this.segment3[0];
				for(i = 129; i <= 160; i++)
				{
					if($this._sprintf("%08x", (k & 0x80000000)) == "80000000")
					{
						$this.addBit(i);
					}
					k = k - 0x80000000;
					k = k << 1;					
				}
				k = $this.segment3[1];
				for(i = 161; i <= 192; i++)
				{
					if($this._sprintf("%08x", (k & 0x80000000)) == "80000000")
					{
						$this.addBit(i);
					}
					k = k - 0x80000000;
					k = k << 1;					
				}
			}
		}
		
		
		// parse body
		message = message.substr(bitmapLength+4);
		for(i in $this.fields)
		{
            var data = '';
            var field = $this.fields[i];
			var element = $this.generalConfig[field];
			if(element[2] == 1)
			{
				// dynamic length
				var fl = element[1];
				var shift = $this._sprintf("%d", fl).length;
				var field_length = message.substr(0, shift)*1;
				message = message.substr(shift);
				if(message.length >= field_length)
				{
					data = message.substr(0, field_length);
					message = message.substr(field_length);
				}
				else
				{
					data = message;
				}
			}
			else
			{
				// fix length
				field_length = element[1];
				data = message.substr(0, field_length);
				message = message.substr(field_length);
			}
			$this.setData(field, data);
		}
	}
    
	this.getMaxField = function()
	{
		if($this.fields.length)
		{
			return $this._max($this.fields);
		}
		else
		{
			return 0;
		}
	};

	this.getField = function()
	{
		var header = "";
        header += $this.type;
		var maxField = $this.getMaxField();
		var seg1 = $this._sprintf("%08x%08x", $this.segment1[0], $this.segment1[1]);
		header += seg1;
		if(maxField > 64)
		{
			var seg2 = $this._sprintf("%08x%08x", $this.segment2[0], $this.segment2[1]);
			header += seg2;
		}
		if(maxField > 128)
		{
			var seg3 = $this._sprintf("%08x%08x", $this.segment3[0], $this.segment3[1]);
			header += seg3;
		}
		return header;
	};

    this.listValue = function()
    {
        var arr = [];
        for(var i in $this.fields)
        {
            arr.push({
                'key': $this.fields[i], 
                'value': $this.values[$this.fields[i]]
            });
        }
        return arr;
    };

	this.getBody = function()
	{
		var body = "";
        var value = "";
        var length = 0;
		$this.fields = $this._arrayUnique($this.fields);
		$this.fields = $this._sort($this.fields);
		for(var i in $this.fields)
		{
            var field = $this.fields[i];
 			if($this.generalConfig[field][2] == 1)
			{
				// dynamic
				value = $this.values[field] || '';
				length = value.length;
				var sl = $this._sprintf("%d", $this.generalConfig[field][1]).length;
				var sf = $this._sprintf("%0"+sl+"d", length);
				body += sf;
				body += value;
			}
			else
			{
				// fix length
				value = $this.values[field];
				length = $this.generalConfig[field][1];
				if($this.generalConfig[field][0] == 'n')
				{
					var val = value * 1;
					body += $this._sprintf("%0"+length+"d", val);
				}
				else
				{
					body += $this._strPad(value, length, ' ', 'STR_PAD_RIGHT');
				}
			}
		}
		return body;
	};

    this.addBit = function(bit, value)
	{
        if($this.fields.indexOf(bit) == -1)
        {
            $this.fields.push(bit);
        }
        if(typeof value != 'undefined')
		{
            $this.setValue(bit, value);
        }		
	};
    
    this.getBit = function(bit)
    {
        return $this.getData(bit);
    };

	this.setData = function(bit, value)
	{
		$this.addBit(bit, value);
	}
	
    this.addData = function(bit, value)
	{
		$this.addBit(bit, value);
	}

	this.getData = function(bit)
	{
        if(typeof bit == 'undefined')
		{
            return $this.values;
        }
        else
        {
            return $this.values[bit] || '';
        }
	};
	this.getISO = function()
	{
		return $this.getType()+$this.getBitmap()+$this.getBody();
	};
	this.setISO = function(iso)
	{
		return $this.parse(iso);
	};
	this.setType = function(type)
	{
		$this.type = type;
	};
	this.getType = function()
	{
		return $this.type;
	};  
    var $this = this;
}

var TLV = function()
{
    this.parse = function(data)
    {
        var tl = 2;
        var sl = 2;
        var remaining = data;
        var result = {};
        while(remaining.length > tl)
        {
            var tag = remaining.substr(0, tl);
            remaining = remaining.substr(2);
            var len = remaining.substr(0, sl);
            remaining = remaining.substr(2);
            var length = parseInt(len);
            var value = remaining.substr(0, length);
            remaining = remaining.substr(length);
            result[tag] = value;
        }
        return result;
    }
    this.build = function(data)
    {
        var result = '';
        for(var tag in data)
        {
            var len = data[tag].length;
            var length = (len<10)?('0'+len):len;
            result += tag+length+data[tag];
        }
        return result;
    }
}