(function() {
  'use strict';

    // Constructor functioni to create an animal
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

    // Function for motherPolarBear to give birth to a new Polar Bear
    PolarBear.prototype.giveBirth = function giveBirth() {
      return new PolarBear('Timmy', 1, 'white', true);
    };
    console.log(motherPolarBear.giveBirth());

    // Species-specific method for duration of swimtime
    PolarBear.prototype.swim = function swim(duration) {
      return ('8 minutes');
    };

    // Constructor function to create a new Turtle
    function BlueJay(name, dob, color, mammal, reptile){
      Animal.apply(this, [name, dob]);
      this.dob = dob || 10;
      this.color = color || 'grey';
      if(typeof(mammal) === 'boolean') {
        this.mammal = mammal;
      } else {
        this.mammal = false;
      }
      if(typeof(reptile) === 'boolean') {
        this.reptile = reptile;
      } else {
        this.reptile = false;
      }
      // console.log(this, arguments);
    }

    BlueJay.prototype = Object.create(Animal.prototype);
    BlueJay.prototype.constructor = BlueJay;

    var motherBlueJay = new BlueJay('Janet', 10, 'blue', false, true);

    // Function for motherBlueJay to lay an egg and create a new Blue Jay
    BlueJay.prototype.layEgg = function layEgg(number){
      return new BlueJay('Janie', 1, 'blue', false, true);
    };
    console.log(motherBlueJay.layEgg(1));

    // Species-specific method for duratioin of flying
    BlueJay.prototype.fly = function fly(duration) {
      return ('20 minutes');
    };

    var sandy = new PolarBear('Sandy', 26, 'white', true, false);
    var jacob = new BlueJay('Jacob', 5, 'blue', false, true);

    // console.log('sandy:', sandy);

    console.log(sandy.mammal);
}());
