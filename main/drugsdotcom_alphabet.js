console.log("drugsdotcom_alphabet.js :: required")

var util = require('util')

var layer1 = "http://www.drugs.com/drug_information.html"
var layer2 = "http://www.drugs.com/alpha/a1.html"

var url = layer1
var osm = require(__dirname + '/../src/Scrapper/Scrapper.js')
var cosmo = osm.createCosmo(url)

cosmo
.find('#content .clearAfter a')
.set('alphabet')
.follow('@href')

.find('div.contentBox > ul.doc-type-list > li > a')
.set('name')
.follow('@href')

.set({

    title: 'h1',
    subtitle: '.drug-subtitle'
})

.find('.contentBox > *:not(h1[itemprop=name], p.drug-subtitle, div#content-box-nav-tabs, #page-icons-footer , #content-box-nav-next, #moreResources)')
.set('overview')

.data(function(data){

    console.log('########################################################################')
    console.log(data)
    console.log('########################################################################')

})