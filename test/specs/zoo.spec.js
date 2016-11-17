(function() {
  'use strict';

  window.zoo = window.zoo || {};

  var expect = chai.expect;

  describe('the application', function (){
    it('should expect the namespace to exist', function(){
      expect(window.zoo).to.be.an('object');
    });
  });

  describe('Test for Animal constructor function', function() {
    it('should take in name as a string and age as a number', function(){
      expect(new window.zoo.Animal('george', 7)).to.be.an('object');
    });

    it('should produce an error if name is not a string', function(){
      try {
        new window.zoo.Animal(5, 'tina');
        expect(true).to.be.false;
      } catch(err) {
        console.log(err);
        expect(err).to.be.instanceof(Object);
        expect(err).to.be.instanceof(TypeError);
      }
    });

    it('should produce an error if age is not a number', function(){
      try {
        new window.zoo.Animal('tina', []);
        expect(true).to.be.false;
      } catch(err) {
        expect(err).to.be.instanceof(Object);
        expect(err).to.be.instanceof(TypeError);
      }
    });
  });

  describe('Constructor function that creates a new Polar Bear', function() {
    var kringle = new window.zoo.PolarBear('kringle', 5, 'white');
    it('should know that all Polar Bears are mammals', function(){
      expect(kringle.mammal).to.be.a('boolean');
      expect(kringle.name).to.equal('kringle');
    });

    it('should know that all Polar Bears are white', function(){
      expect(kringle.color).to.equal('white');
    });
  });

  describe('Method for giving birth', function(){
    var paula = new window.zoo.PolarBear('paula', 10);
    it('should produce a new baby polar bear', function() {
      expect(paula.giveBirth()).to.be.an('object');
    });

  });

  describe('Constructor function that creates a new Blue Jay', function(){
    var joey = new window.zoo.BlueJay('joey', 2);
    it('should know that all Blue Jays are blue', function(){
      expect(joey.color).to.equal('blue');
    });
  });

  // describe('Method for bird chirping', function(){
  //   it('should exect the blue jay to chirp', function(){
  //     expect(new window.zoo.BlueJay).to
  //   })
  // })

}());
