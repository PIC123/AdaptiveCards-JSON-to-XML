const fs = require('fs');
var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
  /*assert.typeOf(foo, 'string'); // without optional message
  assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
  assert.equal(foo, 'bar', 'foo equal `bar`');
  assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
  assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');*/ //generic how to use chai stuff

var conversionFunc = function(xml){}; // TODO: Insert correct function to test here

//var assert = require('assert');
describe('Compare', function() {
  describe('#xmlToJSON()', function() {
    it('Should return correct XML-> JSON', function() {
      fs.readFile('/card.xml', (err, xmlData)=>{
        fs.readFile('/Card.json', (err, jsonData) =>{
            assert.equal(jsonData,conversionFunc(xmlData));         
        })
      });
    });
  });
});