(function() {
  'use strict';


    function PolarBear(name, dob, color, fur){
      this.name = name || 'Random';
      this.dob = dob || 'January 1, 2016';
      this.color = color || 'brown';
      if(typeof(fur) === 'boolean') {
        this.fur = fur;
      } else {
        this.fur = false;
      }
      console.log(this, arguments);
    }

    function ArcticFox(name, dob, color, fur){
      this.name = name || 'Miscellaneous';
      this.dob = dob || 'January 1, 2014';
      this.color = color || 'grey';
      if(typeof(fur) === 'boolean') {
        this.fur = fur;
      } else {
        this.fur = false;
      }
      console.log(this, arguments);
    }

    var sandy = new PolarBear('sandy', '1047618000000', 'white', true);
    var tails = new ArcticFox('tails', '1170738000000', 'white', true);

}());
