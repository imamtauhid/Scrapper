console.log("scrap-test.js :: required")

// var scrap = require(__dirname + "/../src/Scrapper.js")()
var cosmo = require('osmosis')

    var url = "www.craigslist.org/about/sites"

    var url1 = "www.drugs.com"

    var scr = require(__dirname + '/../src/Scrapper.js')

    console.log("scrap-test.js :: test 2 :: start")

    var page = scr.createCosmo(url1)

    var firstNews = page.find('div.homeMain > div.contentBox:first > div.newsItem')

        firstNews.set({

            date: 'p.newsDate',
            title: 'h2',
            description: 'p:not(.newsDate)'

        })
        .data(function(listing){

            console.log('start ============================================')
            console.log(listing)
            console.log('end ============================================')

        })

console.log("scrap-test.js :: test 1 :: end")

return

// .find('h1 + div a')
// .set('location')
// .follow('@href')
// .find('header + div + div li > a')
// .set('category')
// .follow('@href')
// .find('p > a', '.totallink + a.button.next:first')
// .follow('@href')
// .set({
//     'title':        'section > h2',
//     'description':  '#postingbody',
//     'subcategory':  'div.breadbox > span[4]',
//     'date':         'time@datetime',
//     'latitude':     '#map@data-latitude',
//     'longitude':    '#map@data-longitude',
//     'images[]':     'img@src'
// })
// .data(function(listing) {
//     // do something with listing data

//     console.log("%%scrap-test.js :: data ---%")
//     console.log(listing)
//     console.log("%%scrap-test.js :: data ---%")

// })

return false