
var boardView = {

  model: solver,

  init:function() {
    this.$grid = $('#board-grid');

    for (var i = 0 ; i < this.model.size; i++ ) {
      var $rowDiv = $('<div>');
      for (var j = 0 ; j < this.model.size; j++ ) {
        var $squareDiv = $('<div>');
        $squareDiv.addClass( 'square');
        if( (i+j) % 2 === 0 ){
          $squareDiv.addClass( 'dark-square');
        } else {
          $squareDiv.addClass( 'light-square');
        }
        var squareIndex = i * this.model.size + j;
        $squareDiv.attr('id', 'square-' + squareIndex );
        
        $rowDiv.append( $squareDiv );
      }
      this.$grid.append( $rowDiv );
    }

  },


  showSolution: function() {
    for( var square in this.model.solution  )  {
      var idString = '#square-' + this.model.solution[square];
      $(idString).addClass('has-queen');
    }
  },

};
