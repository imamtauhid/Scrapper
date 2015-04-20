console.log("drugsdotcom.js :: required")

var url = "www.krl.co.id/infonew/rute_jadwal.php"
var scr = require(__dirname + '/../src/Scrapper/Scrapper.js')
var cosmo = scr.createCosmo(url)

console.log("krl.co.id.js :: start querying :: ", url)

cosmo
.find('form+ table tr:nth-child(2)')
.set({

    'no' : 'td+td',
    'ket' : 'td+td+td',
    'kelaskrl' : 'td+td+td+td',
    'relasi' : 'td+td+td+td+td',
    'berangkat' : 'td+td+td+td+td+td',
    'singgah' : 'td+td+td+td+td+td+td',
    'waktudatang' : 'td+td+td+td+td+td+td+td',
    'waktuberangkat' : 'td+td+td+td+td+td+td+td+td',
    'ls' : 'td+td+td+td+td+td+td+td+td+td',
    'status' : 'td+td+td+td+td+td+td+td+td+td+td',

})
.data(function(listing){

    console.log("krl.co.id.js :: listing :: ", listing)

})