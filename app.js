

controller = {

  model: solver,
  view: boardView,

  init: function(size) {

    var start = new Date();
    console.log( "start", start ); 

    this.model.init( size );
    this.view.init();
    this.model.solve();
    this.view.showSolution();


    console.log( "solution", this.model.numSolutions );

    var finish = new Date();
    console.log( "finish", finish ); 
    console.log( "elapsed", finish - start, "milliseconds" ); 

  },
}


$(document).ready( function(){
  controller.init( 10 );
});

