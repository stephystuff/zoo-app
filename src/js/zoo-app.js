(function() {
  'use strict';

    window.zoo = window.zoo || {};

    window.zoo.Animal = Animal;
    window.zoo.PolarBear = PolarBear;
    window.zoo.BlueJay =BlueJay;

    /**
     * Constructor function to create a new animal
     * @param {String} name [description]
     * @param {Number} age  [description]
     * @throws {SyntaxError} If name is not a string, and age is not a number
     */
    function Animal(name, age) {
      if(typeof(name) !== 'string') {
        throw new SyntaxError('Hey, this is not a string!');
      }
      if(typeof(age) !== 'number'){
        console.log('hey');
        throw new SyntaxError('Hey,this is not a number!');
      }
      console.log('inside animal', this);
      this.name = name || 'Miscellaneous';
      this.dob = age || 20;
    }

    // Constructor function to create a new Polar Bear
    function PolarBear(name, age){
      Animal.apply(this, [name, age]);
      this.dob = age || 11;
      // console.log(this, arguments);
    }

    PolarBear.prototype = Object.create(Animal.prototype);
    PolarBear.prototype.constructor = PolarBear;
    PolarBear.prototype.mammal = true;
    PolarBear.prototype.color = 'white';

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

    // Constructor function to create a new BlueJay
    /**
     * [BlueJay description]
     * @param {[type]} name    [description]
     * @param {[type]} age     [description]
     * @param {[type]} color   [description]
     * @param {[type]} mammal  [description]
     * @param {[type]} reptile [description]
     */
    function BlueJay(name, age, color, mammal, bird){
      Animal.apply(this, [name, age]);
      this.dob = age || 10;
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
