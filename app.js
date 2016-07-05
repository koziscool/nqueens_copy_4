

controller = {

  init: function(size) {

    var start = new Date();
    console.log( "start", start ); 



    var finish = new Date();
    console.log( "finish", finish ); 
    console.log( "elapsed", finish - start, "milliseconds" ); 

  },
}


$(document).ready( function(){
  controller.init();
});

