
var solver = {

  size: 8,
  solution: [],
  numSolutions:0,
  squares: [],

  init: function( size ) {
    this.size = size;
    for( i = 0; i < this.size * this.size; i++ ) {
      this.squares[i] = i;
    }
  },

  rowNumber: function( i ) {
    return Math.floor( i / this.size );
  },

  colNumber: function( i ) {
    return i % this.size;
  },

  removeAdjacent: function( queen, available ) {
    var modelContext = this;
    var newRow = this.rowNumber( queen );
    var newCol = this.colNumber( queen);

    return available.filter( function(item){
      return ( modelContext.rowNumber( item ) !== newRow && modelContext.colNumber( item ) !== newCol &&
       modelContext.rowNumber( item ) + modelContext.colNumber( item ) !== newRow + newCol && 
       modelContext.rowNumber( item ) - modelContext.colNumber( item ) !== newRow - newCol );
    });
  },

  solve: function(){
    this.iterateSolver( this.squares.slice(), [], 0 );

    if( this.numSolutions > 0 ){
      console.log( "num solutions", this.numSolutions );
    } else {
      console.log( "no solutions" );
    }

  },

  iterateSolver: function( available, partialSoln, currentRowNum ) {

    if( partialSoln.length === this.size) {
      this.numSolutions++;
      this.solution = partialSoln;
      return true;
    }

    if( available.length <= 0 ) {
      return false;
    }

    while( available[0] < (currentRowNum + 1) * this.size) {
      var newQueen = available[0];
      var newAvailable = this.removeAdjacent( newQueen, available );
      var newPartial = partialSoln.slice();
      newPartial.push( newQueen );
      this.iterateSolver( newAvailable, newPartial, currentRowNum + 1 );
      available.shift();
    }

  },


}


