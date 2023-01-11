function breezah(_in, _out) {
    var s = "";
    var n = _in.value.toLowerCase();

    for (i = 0; i < n.length; i++) {
        var c = n.charAt(i);
        s += i % 2 ? c : c.toUpperCase();
    }
    _out.value = s;
}


function flipString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = flipTable[c]
        result[last - i] = r != undefined ? r : c
    }
    return result.join('')
}

var flipTable = {
    a: '\u0250',
    b: 'q',
    c: '\u0254',
    d: 'p',
    e: '\u01DD',
    f: '\u025F',
    g: '\u0183',
    h: '\u0265',
    i: '\u0131',
    j: 'Å¿',
    k: '\u029E',
    l: '×Ÿ',
    m: '\u026F',
    n: 'u',
    r: '\u0279',
    t: '\u0287',
    v: '\u028C',
    w: '\u028D',
    y: '\u028E',
    '.': '\u02D9',
    '[': ']',
    '(': ')',
    '{': '}',
    '?': '\u00BF',
    '!': '\u00A1',
    "\'": ',',
    '<': '>',
    '_': '\u203E',
    ';': '\u061B',
    '\u203F': '\u2040',
    '\u2045': '\u2046',
    '\u2234': '\u2235',
    '\r': '\n',
    0: '0',
    1: 'â‡‚',
    2: 'Õ‡',
    3: 'Æ',
    4: 'h',
    5: 'Ê¢',
    6: '9',
    7: 'L',
    8: '8',
    9: '6'
}

for (i in flipTable) {
    flipTable[flipTable[i]] = i
}

function mirrorString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = mirrorTable[c]
        result[last - i] = r != undefined ? r : c
    }
    return result.join('')
}

var mirrorTable = {
    a: 'É’',
    b: 'Êš',
    c: 'É”',
    d: 'Î±',
    e: 'É˜',
    f: 'Ê‡',
    g: 'Ï±',
    h: 'Ğ½',
    i: 'Ä±',
    j: 'Ä¯',
    k: 'Ê',
    l: 'l',
    m: 'Ğ¼',
    n: 'Ğ¸',
    o: 'o',
    p: 'q',
    q: 'p',
    r: 'Ñ',
    s: 'Æ¨',
    t: 'Ñ‚',
    u: 'Ï…',
    v: 'v',
    w: 'Ï‰',
    x: 'x',
    y: 'Î³',
    z: 'z',
    '[': ']',
    '(': ')',
    '{': '}',
    '?': 'ØŸ',
    '<': '>'
}

for (i in mirrorTable) {
    mirrorTable[mirrorTable[i]] = i
}

//////burasi start
function sekilliString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = sekilliTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}
var sekilliTable = {
    a: 'ğ”',
    b: 'ğ”Ÿ',
    c: 'ğ” ',
    d: 'ğ”¡',
    e: 'ğ”¢',
    f: 'ğ”£',
    g: 'ğ”¤',
    h: 'ğ”¥',
    i: 'ğ”¦',
    j: 'ğ”§',
    k: 'ğ”¨',
    l: 'ğ”©',
    m: 'ğ”ª',
    n: 'ğ”«',
    o: 'ğ”¬',
    p: 'ğ”­',
    q: 'ğ”®',
    r: 'ğ”¯',
    s: 'ğ”°',
    t: 'ğ”±',
    u: 'ğ”²',
    v: 'ğ”³',
    w: 'ğ”´',
    x: 'ğ”µ',
    y: 'ğ”¶',
    z: 'ğ”·',
}

for (i in sekilliTable) {
    sekilliTable[sekilliTable[i]] = i
}
//////burasi end

//////burasi start
function sekilkalinString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = sekilkalinTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}
var sekilkalinTable = {
    a: 'ğ–†',
    b: 'ğ–‡',
    c: 'ğ–ˆ',
    d: 'ğ–‰',
    e: 'ğ–Š',
    f: 'ğ–‹',
    g: 'ğ–Œ',
    h: 'ğ–',
    i: 'ğ–',
    j: 'ğ–',
    k: 'ğ–',
    l: 'ğ–‘',
    m: 'ğ–’',
    n: 'ğ–“',
    o: 'ğ–”',
    p: 'ğ–•',
    q: 'ğ––',
    r: 'ğ–—',
    s: 'ğ–˜',
    t: 'ğ–™',
    u: 'ğ–š',
    v: 'ğ–›',
    w: 'ğ–œ',
    x: 'ğ–',
    y: 'ğ–',
    z: 'ğ–Ÿ',
}

for (i in sekilkalinTable) {
    sekilkalinTable[sekilkalinTable[i]] = i
}
function sekilkalin() {
    var result = sekilkalinString(document.generator.textin.value.toLowerCase());
    document.generator.textsekilkalin.value = result;
}
//////burasi end
//////burasi start
function italikString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = italikTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}
var italikTable = {
    a: 'ğ’¶',
    b: 'ğ’·',
    c: 'ğ’¸',
    d: 'ğ’¹',
    e: 'ğ‘’',
    f: 'ğ’»',
    g: 'ğ‘”',
    h: 'ğ’½',
    i: 'ğ’¾',
    j: 'ğ’¿',
    k: 'ğ“€',
    l: 'ğ“',
    m: 'ğ“‚',
    n: 'ğ“ƒ',
    o: 'ğ‘œ',
    p: 'ğ“…',
    q: 'ğ“†',
    r: 'ğ“‡',
    s: 'ğ“ˆ',
    t: 'ğ“‰',
    u: 'ğ“Š',
    v: 'ğ“‹',
    w: 'ğ“Œ',
    x: 'ğ“',
    y: 'ğ“',
    z: 'ğ“',
}

for (i in italikTable) {
    italikTable[italikTable[i]] = i
}
function italik() {
    var result = italikString(document.generator.textin.value.toLowerCase());
    document.generator.textitalik.value = result;
}
//////burasi end
//////burasi start
function italikalinString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = italikalinTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}
var italikalinTable = {
    a: 'ğ“ª',
    b: 'ğ“«',
    c: 'ğ“¬',
    d: 'ğ“­',
    e: 'ğ“®',
    f: 'ğ“¯',
    g: 'ğ“°',
    h: 'ğ“±',
    i: 'ğ“²',
    j: 'ğ“³',
    k: 'ğ“´',
    l: 'ğ“µ',
    m: 'ğ“¶',
    n: 'ğ“·',
    o: 'ğ“¸',
    p: 'ğ“¹',
    q: 'ğ“º',
    r: 'ğ“»',
    s: 'ğ“¼',
    t: 'ğ“½',
    u: 'ğ“¾',
    v: 'ğ“¿',
    w: 'ğ”€',
    x: 'ğ”',
    y: 'ğ”‚',
    z: 'ğ”ƒ',
}

for (i in italikalinTable) {
    italikalinTable[italikalinTable[i]] = i
}
function italikalin() {
    var result = italikalinString(document.generator.textin.value.toLowerCase());
    document.generator.textitalikkalin.value = result;
}
//////burasi end
//////burasi start
function icibosString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = icibosTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}
var icibosTable = {
    a: 'ğ•’',
    b: 'ğ•“',
    c: 'ğ•”',
    d: 'ğ••',
    e: 'ğ•–',
    f: 'ğ•—',
    g: 'ğ•˜',
    h: 'ğ•™',
    i: 'ğ•š',
    j: 'ğ•›',
    k: 'ğ•œ',
    l: 'ğ•',
    m: 'ğ•',
    n: 'ğ•Ÿ',
    o: 'ğ• ',
    p: 'ğ•¡',
    q: 'ğ•¢',
    r: 'ğ•£',
    s: 'ğ•¤',
    t: 'ğ•¥',
    u: 'ğ•¦',
    v: 'ğ•§',
    w: 'ğ•¨',
    x: 'ğ•©',
    y: 'ğ•ª',
    z: 'ğ•«',
    0: 'ğŸ˜',
    1: 'ğŸ™',
    2: 'ğŸš',
    3: 'ğŸ›',
    4: 'ğŸœ',
    5: 'ğŸ',
    6: 'ğŸ',
    7: 'ğŸŸ',
    8: 'ğŸ ',
    9: 'ğŸ¡'
}

for (i in icibosTable) {
    icibosTable[icibosTable[i]] = i
}
function icibos() {
    var result = icibosString(document.generator.textin.value.toLowerCase());
    document.generator.texticibos.value = result;
}
//////burasi end

//////burasi start
function dolarliString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = dolarliTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}
var dolarliTable = {
    a: 'aÌ¾',
    b: 'bÌ¾',
    c: 'cÌ¾',
    d: 'dÌ¾',
    e: 'eÌ¾',
    f: 'fÌ¾',
    g: 'gÌ¾',
    h: 'hÌ¾',
    i: 'iÌ¾',
    j: 'jÌ¾',
    k: 'kÌ¾',
    l: 'lÌ¾',
    m: 'mÌ¾',
    n: 'nÌ¾',
    o: 'oÌ¾',
    p: 'pÌ¾',
    q: 'qÌ¾',
    r: 'rÌ¾',
    s: 'sÌ¾',
    t: 'tÌ¾',
    u: 'uÌ¾',
    v: 'vÌ¾',
    w: 'wÌ¾',
    x: 'xÌ¾',
    y: 'yÌ¾',
    z: 'zÌ¾',
    0: 'ğŸ˜',
    1: 'ğŸ™',
    2: 'ğŸš',
    3: 'ğŸ›',
    4: 'ğŸœ',
    5: 'ğŸ',
    6: 'ğŸ',
    7: 'ğŸŸ',
    8: 'ğŸ ',
    9: 'ğŸ¡'
}

for (i in dolarliTable) {
    dolarliTable[dolarliTable[i]] = i
}
function dolarli() {
    document.generator.textdolarli.value = dolarliString(document.generator.textin.value.toLowerCase());
}
//////burasi end



function BigString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = BigTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}

var BigTable = {
    a: '|Ì¿Ì¶ Ì¿Ì¶ Ì¿Ì¶ Ì¿Ì¶|',
    b: '|Ì¿Í‡Ì¶ Ì¿Í‡Ì¶ Ì¿Í‡Ì¶)',
    c: '|Ì¿Í‡ Ì¿Í‡ Ì¿Í‡ Ì¿Í‡ ',
    d: '|Ì¿Í‡ Ì¿Í‡ Ì¿Í‡ Ì¿Í‡)',
    e: '|Ì¿Í‡Ì¶ Ì¿Í‡Ì¶ Ì¿Í‡ ',
    f: '|Ì¿Ì¶ Ì¿Ì¶ Ì¿Ì¶ Ì¿Ì¶ ',
    g: '|Ì¿Í‡ Ì¿Í‡ Ì¿Í‡ Ì¶Ì¿Í‡Î¹ ',
    h: '|Ì¶ Ì¶ Ì¶ Ì¶| ',
    i: '| ',
    j: 'Í‡ Í‡Í‡Í‡Í‡|',
    k: '|< ',
    l: '|Í‡ Í‡  ',
    m: '|Ì¿ V Ì¿|',
    n: '|Ì¿ \\Í‡|',
    o: '|Ì¿Í‡ Ì¿Í‡ Ì¿Í‡|',
    p: '|Ì¿Ì¶ Ì¿Ì¶ Ì¿Ì¶ Ì¿Ì¶\' ',
    q: '|Ì¿Í‡ Ì¿Í‡ Ì¿Í‡ Ì¿Í‡Í‡|Í‡ ',
    r: '|Ì¿ Ì¿ Ì¿\\ ',
    s: 'Í‡ Í‡\\Ì¿ Ì¿ ',
    t: '  Ì¿ Ì¿|Ì¿ Ì¿ ',
    u: '|Í‡ Í‡ Í‡ Í‡ Í‡|',
    v: '\\ Í‡ / ',
    w: '|Í‡ Î› Í‡|',
    x: 'X ',
    y: 'Y ',
    z: 'Ì¿ Ì¿/ Í‡ Í‡ '
}

for (i in BigTable) {
    BigTable[BigTable[i]] = i
}

function big() {
    var result = BigString(document.generator.textin.value.toLowerCase());
    document.generator.textBig.value = result;
}

function BoxedString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i)
        var r = BoxedTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}

var BoxedTable = {
    a: '[Ì…Ì²aÌ…Ì²]',
    b: '[Ì…Ì²bÌ…Ì²]',
    c: '[Ì…Ì²cÌ…Ì²]',
    d: '[Ì…Ì²dÌ…Ì²]',
    e: '[Ì…Ì²eÌ…Ì²]',
    f: '[Ì…Ì²fÌ…Ì²]',
    g: '[Ì…Ì²gÌ…Ì²]',
    h: '[Ì…Ì²hÌ…Ì²]',
    i: '[Ì…Ì²iÌ…Ì²]',
    j: '[Ì…Ì²jÌ…Ì²]',
    k: '[Ì…Ì²kÌ…Ì²]',
    l: '[Ì…Ì²lÌ…Ì²]',
    m: '[Ì…Ì²mÌ…Ì²]',
    n: '[Ì…Ì²nÌ…Ì²]',
    o: '[Ì…Ì²oÌ…Ì²]',
    p: '[Ì…Ì²pÌ…Ì²]',
    q: '[Ì…Ì²qÌ…Ì²]',
    r: '[Ì…Ì²rÌ…Ì²]',
    s: '[Ì…Ì²sÌ…Ì²]',
    t: '[Ì…Ì²tÌ…Ì²]',
    u: '[Ì…Ì²uÌ…Ì²]',
    v: '[Ì…Ì²vÌ…Ì²]',
    w: '[Ì…Ì²wÌ…Ì²]',
    x: '[Ì…Ì²xÌ…Ì²]',
    y: '[Ì…Ì²yÌ…Ì²]',
    0: '[Ì…Ì²0Ì…Ì²]',
    1: '[Ì…Ì²1Ì…Ì²]',
    2: '[Ì…Ì²2Ì…Ì²]',
    3: '[Ì…Ì²3Ì…Ì²]',
    4: '[Ì…Ì²4Ì…Ì²]',
    5: '[Ì…Ì²5Ì…Ì²]',
    6: '[Ì…Ì²6Ì…Ì²]',
    7: '[Ì…Ì²7Ì…Ì²]',
    8: '[Ì…Ì²8Ì…Ì²]',
    9: '[Ì…Ì²9Ì…Ì²]',
    '!': '[Ì…Ì²ï¹—Ì…Ì²]',
    '?': '[Ì…Ì²ï¹–Ì…Ì²]'
}

for (i in BoxedTable) {
    BoxedTable[BoxedTable[i]] = i
}

function clearall() {
    document.generator.textin.value = '';
}

String.prototype.reverse = function () {
    var r = '';
    for (var i = this.length - 1; i >= 0; i--) {
        r += this.charAt(i);
    }
    return r;
}

function invert(n) {
    var field = document.getElementsByName(n)[0];
    field.value = field.value.reverse();
}


function box() {
    var result = BoxedString(document.generator.textin.value.toLowerCase());
    document.generator.textBoxed.value = result;
}
function flip() {
    var result = flipString(document.generator.textin.value.toLowerCase());
    document.generator.textrevflip.value = result;
}

function spiegel() {
    var result = mirrorString(document.generator.textin.value.toLowerCase());
    document.generator.textmirror.value = result;
}
function sekilli() {
    var result = sekilliString(document.generator.textin.value.toLowerCase());
    document.generator.textsekilli.value = result;
}




////////// EKLEME ///////////

//////burasi start
function balonEkleme(aString) {
    return 'Ëœâ€Â°â€¢.Ëœâ€Â°â€¢ ' + aString + ' â€¢Â°â€Ëœ.â€¢Â°â€Ëœ';
}
//////burasi end
//////burasi start
function dereceEkleme(aString) {
    return 'Ä±llÄ±llÄ± ' + aString + ' Ä±llÄ±llÄ±';
}
//////burasi end
//////burasi start
function kutuEkleme(aString) {
    return 'â–Œâ”‚â–ˆâ•‘â–Œâ•‘â–Œâ•‘ ' + aString + ' â•‘â–Œâ•‘â–Œâ•‘â–ˆâ”‚â–Œ';
}
//////burasi end
//////burasi start
function noktaEkleme(aString) {
    return 'Â°Â°Â°Â·.Â°Â·..Â·Â°Â¯Â°Â·..Â· ' + aString + ' Â·..Â·Â°Â¯Â°Â·.Â·Â° .Â·Â°Â°Â°';
}
//////burasi end
//////burasi start
function papyonEkleme(aString) {
    return '(Â¯Â´â€¢..â€¢ ğŸ€ ' + aString + ' ğŸ€ â€¢..â€¢Â´Â¯)';
}
//////burasi end
//////burasi start
function frameEkleme(aString) {
    return 'ã€ ' + aString + ' ã€';
}
//////burasi end
//////burasi start
function starEkleme(aString) {
    return 'â˜… ' + aString + ' â˜…';
}
//////burasi end
//////burasi start
function alevEkleme(aString) {
    return 'ğŸ”¥ ' + aString + ' ğŸ”¥';
}
//////burasi end
//////burasi start
function elEkleme(aString) {
    return 'âœŒ ' + aString + ' âœŒ';
}
//////burasi end
//////burasi start
function solomonEkleme(aString) {
    return 'âœ¡ ' + aString + ' âœ¡';
}
//////burasi end
//////burasi start
function galaksiEkleme(aString) {
    return 'ğŸ’« ' + aString + ' ğŸ’«';
}
//////burasi end
//////burasi start
function apartmanEkleme(aString) {
    return 'ğŸŒƒ ' + aString + ' ğŸŒƒ';
}
//////burasi end
//////burasi start
function karEkleme(aString) {
    return 'â„ ' + aString + ' â„';
}
//////burasi end
//////burasi start
function gulucukEkleme(aString) {
    return 'â—•â€¿â—• ' + aString + ' â—•â€¿â—•';
}
//////burasi end
//////burasi start
function uzungulucukEkleme(aString) {
    return 'Â¯\_(ãƒ„)_/Â¯ ' + aString + ' Â¯\_(ãƒ„)_/Â¯';
}
//////burasi end


function ekleme() {
    document.generator.eklemebalon.value = balonEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemederece.value = dereceEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemekutu.value = kutuEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemenokta.value = noktaEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemepapyon.value = papyonEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemeframe.value = frameEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemestar.value = starEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemealev.value = alevEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemeel.value = elEkleme(document.generator.textin.value.toLowerCase());
    // guncelleme 08.03.2021
    document.generator.eklemesolomon.value = solomonEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemegalaksi.value = galaksiEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemeapartman.value = apartmanEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemekar.value = karEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemegulucuk.value = gulucukEkleme(document.generator.textin.value.toLowerCase());
    document.generator.eklemeuzungulucuk.value = uzungulucukEkleme(document.generator.textin.value.toLowerCase());
}

function hepsi(){
    sekilli();
    sekilkalin();
    italik();
    italikalin();
    icibos();
    dolarli();
    
    ekleme();
}

//kopyalama butonu 30.10.2021
function sonucuKopyala(buttonId) {
    navigator.clipboard.writeText(document.getElementById(buttonId).value);
}
function kopyalamaButonlari() {
    var count = document.getElementsByClassName("nicksonuc").length;
    console.log(count);
    
    for (let i = 1; i < count; i++) {
        var idName = document.getElementsByClassName("nicksonuc")[i].getAttribute("name");
        var buton = document.createElement("BUTTON");
        buton.setAttribute('id', idName + "-kopyala");
        buton.setAttribute('class', "kopyala");
        buton.setAttribute('type', 'button');
        buton.setAttribute('onClick', 'sonucuKopyala("' + idName + '")');
        buton.innerHTML = "Kopyala";
        
        document.getElementsByClassName("nicksonuc")[i].after(buton);
    }
}
document.addEventListener("DOMContentLoaded", function(){
    kopyalamaButonlari();
});