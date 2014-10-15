(function(){
  'use strict';

    angular
      .module('color', [])
      .service('Color', Color);

    /* @inject */
    function Color($http, $q){
      var that = this;
      this.json      = 'colors.json';
      this.promised  = $http.get(this.json);
      this.colors    = [];
      this.primaries = [];

      this.getColors = function( scope ){
        return this.promised
          .then( that.initColors )
          .then( that.setPrimaries );
      }
      this.initColors = function( response ){
        that.colors = response.data.colors;
        return that.colors;
      }
      this.setPrimaries = function(colors){
        that.colors = _.map(that.colors, function ( item, index, collection ){
          item.hex = item.colors["500"];
          that.iterateData(item);
          return item
        });
        return that.colors;
      }
      this.iterateData = function(primary){
        that.colors[primary.id].children = [];
        _.forEach(primary.colors, function (item, index){
          that.colors[primary.id].children.push(primary.name +'-'+index)
          // console.log(item)
        })
      }
    }

}).call(this);