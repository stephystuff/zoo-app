(function() {
  'use strict';

  window.zoo = window.zoo || {};

  var expect = chai.expect;

  describe('Tests existence of namespace', function (){
    it('should expect the namespace to exist', function(){
      expect(new window.zoo.Animal('Sandy', 26)).to.be.an('object');
    });
  });

  describe('Test for Animal constructor function', function() {
    it('should take in name as a string and age as a number', function(){
      expect(new window.zoo.Animal('george', 7)).to.be.an('object');
    });
  });

  describe('Constructor function that creates a new PolarBear', function() {
    var kringle = new window.zoo.PolarBear('kringle', 5, 'white');
    it('should know that all Polar Bears are mammals', function(){
      expect(kringle.mammal).to.be.a('boolean');
    });

    it('should know that all Polar Bears are white', function(){
      expect(kringle.color).to.equal('white');
    });
  });

}());
