var __ = require('lodash'),
    async = require('async')

var library = 'osmosis'
var c = {}
var self = c

/**
 * [Cosmo description]
 * @param {[type]} config [description]
 */
var Cosmo = function(config){

    var cosmo = require(library)
    var _this = this
    var _config = {}
    var _transformed = {}

    /**
     * [_construct description]
     * @param  {[type]} config [description]
     * @return {[type]}        [description]
     */
    var _construct = function(config){

        console.log("Scrapper.js :: _construct")

        if(typeof config == 'string'){

            _config.uri = config

        }else if(typeof config == 'object'){

            if(config.uri) _config.uri = config.uri

        }

        _this.init()

    }

    /**
     * [init description]
     * @return {[type]} [description]
     */
    _this.init = function(){

        console.log("Scrapper.js :: init")

        if(!_config.uri){

            console.log('no config uri')

            return _this

        }

        _this.clean()

        _this.get(_config.uri)

        return _this

    }

    /**
     * [clean description]
     * @return {[type]} [description]
     */
    _this.clean = function(){

        _transformed = cosmo

        return _this

    }

    /**
     * [getCore description]
     * @return {[type]} [description]
     */
    _this.getCore = function(){

        console.log("Scrapper.js :: getCore")

        return cosmo

    }

    /**
     * [setUrl description]
     * @param {[type]} uri [description]
     */
    _this.setUrl = function(uri){

        console.log("Scrapper.js :: setUrl")

        _config.uri = uri

        return _this

    }

    /**
     * [find description]
     * @param  {[type]} query [description]
     * @return {[type]}       [description]
     */
    _this.find = function(query){

        console.log("Scrapper.js :: find")

        _transformed = _transformed.find(query)

        return _this

    }

    /**
     * [then description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    _this.then = function(callback){

        console.log("Scrapper.js :: then")

        _transformed = _transformed.then(function(context, data, next){

            callback(context, data, next, this)

        })

    }

    /**
     * [follow description]
     * @param  {[type]} query [description]
     * @return {[type]}       [description]
     */
    _this.follow = function(query){

        console.log("Scrapper.js :: follow")

        _transformed = _transformed.follow(query)

        return _this

    }

    /**
     * [set description]
     * @param {[type]} data [description]
     */
    _this.set = function(data){

        console.log("Scrapper.js :: set")

        if(typeof data == 'object'){

            _transformed = _transformed.set(data)

        }

        if(typeof data == 'string'){

            _transformed = _transformed.set(arguments[0], arguments[1])

        }

        return _this

    }

    /**
     * [data description]
     * @param  {[type]} iteration [description]
     * @return {[type]}           [description]
     */
    _this.data = function(iteration){

        console.log("Scrapper.js :: data")

        if(typeof iteration == 'function'){

            _transformed.data(function(data){

                iteration(data, this)

            })

        }

    }

    /**
     * [get description]
     * @param  {[type]} uri     [description]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    _this.get = function(uri, options){

        console.log("Scrapper.js :: get")

        var opt = options || {}

        _transformed = _transformed.get(uri, opt)

        return _this

    }

    /**
     * [post description]
     * @param  {[type]} uri     [description]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    _this.post = function(uri, options){

        console.log("Scrapper.js :: post")

        var opt = options || {}

        _transformed = _transformed.post(uri, opt)

        return _this

    }

    /**
     * [log description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    _this.log = function(callback){

        console.log("Scrapper.js :: log")

        _transformed.log(function(o){

            callback(o)

        })

    }

    /**
     * [error description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    _this.error = function(callback){

        console.log("Scrapper.js :: error")

        _transformed.error(function(e){

            callback(e)

        })

    }

    /**
     * [debug description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    _this.debug = function(callback){

        console.log("Scrapper.js :: debug")

        _transformed.debug(function(d){

            callback(d)

        })

    }

    _construct(config)

}

/**
 * [createCosmo description]
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
self.createCosmo = function(config){

    console.log("Scrapper.js :: createCosmo")

    return new Cosmo(config)

}

module.exports = c