(function() {
  'use strict';

    function Animal(name, dob) {
      console.log('inside animal', this);
      this.name = name || 'Miscellaneous';
      this.dob = dob || 'September 10, 2010';
    }

    // Constructor function to create a new Polar Bear
    function PolarBear(name, dob, color, mammal){
      Animal.apply(this, [name, dob]);
      this.dob = dob || 10;
      this.color = color || 'brown';
      if(typeof(mammal) === 'boolean') {
        this.mammal = mammal;
      } else {
        this.mammal = false;
      }
      // console.log(this, arguments);
    }

    PolarBear.prototype = Object.create(Animal.prototype);
    PolarBear.prototype.constructor = PolarBear;

    var motherPolarBear = new PolarBear('Rudy', 30, 'white', true);

    PolarBear.prototype.giveBirth = function giveBirth() {
      return new PolarBear('Timmy', 1, 'white', true);
    };
    console.log(motherPolarBear.giveBirth());

    // Constructor function to create a new Turtle
    function BlueJay(name, dob, color, mammal){
      Animal.apply(this, [name, dob]);
      this.dob = dob || 10;
      this.color = color || 'grey';
      if(typeof(mammal) === 'boolean') {
        this.mammal = mammal;
      } else {
        this.mammal = false;
      }
      // console.log(this, arguments);
    }

    BlueJay.prototype = Object.create(Animal.prototype);
    BlueJay.prototype.constructor = BlueJay;

    var sandy = new PolarBear('Sandy', 26, 'white', true);
    var jacob = new BlueJay('Jacob', 5, 'green', false);

    // console.log('sandy:', sandy);

    console.log(sandy.mammal);
}());
