console.log("drugsdotcom.js :: required")

var url = "http://www.drugs.com/drug_information.html"
var scr = require(__dirname + '/../src/Scrapper/Scrapper.js')
var cosmo = scr.createCosmo(url)

cosmo
.find('div.boxList.boxListAZDrugs > p.paging-list-index.clearAfter > a')
.follow('@href')
.find('div.contentBox ul.doc-type-list > li > a')
.follow('@href')
.find('#intelliTXT')
.set({

    title: 'div.contentBox > h1[itemprop="name"]',
    subtitle: 'div.contentBox > p.drug-subtitle',
    description: 'div.contentBox > (#first_ad_unit + *)'

})
.data(function (data) {

    // body...
    console.log('##############################################')
    console.log(data)
    console.log('##############################################')

})
