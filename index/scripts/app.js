$(document).ready(function() {
   var override=0;

  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBE0cDmss_eLeo1q_YMAAaFgx6lfMmgMv0",
    authDomain: "guess-game-b807e.firebaseapp.com",
    databaseURL: "https://guess-game-b807e.firebaseio.com",
    projectId: "guess-game-b807e",
    storageBucket: "guess-game-b807e.appspot.com",
    messagingSenderId: "569127673568"
  };
  firebase.initializeApp(config);

  // Establish to identify which branch of our Firebase Database
  var mainBranch = firebase.database().ref();

  // Send Data to Firebase
  $('.button').click(function() {
    //alert("OMG");
	
    var messageToSend = guess;
    // Pushes a new item to our Firebase database
    
  })

  // Recieve Data from Firebase
  var getDataFromFirebase = function() {
    mainBranch.on('child_added', function(myFirebaseItem) {
      var firebaseChild = myFirebaseItem.val();
      var theActualMessage = firebaseChild.specialMessage;
      $('.box').append(theActualMessage);
    });
  }

  getDataFromFirebase();

  
  var guess=["win","lose","lose","lose"];

  
  $( ".box1,.box2,.box3,.box4" ).on( "click", function() {
	  num = Math.floor(Math.random() * (guess.length));
	 
	   var height = $(this).css( "height" );
	  height = parseInt(height, 10);
	  var width =$(this).css( "width" );
	  width = parseInt(width, 10);
	    // parse font size, if less than 50 increase font size
		//z_index++;
	  //$( this ).css( "zIndex", "+=5" );
	  
	  
	  
  if ((height + 50) <= 500) {
    $( this ).css( "height", "+=50" );
	 $(this).append(" "+guess[num]+"<br/>");
 
  }
  
   if ((width + 50) <= 500) {
    $( this ).css( "width", "+=50" );
	
   
  }

  if ((height + 50) >= 500 && override==0){
	  override=1;
	  var get_data=$(this).text();
	    mainBranch.push({
      specialMessage: get_data
    });
  }
  
	  $(".box11").removeClass("z_index no")
            // Remove all classes
            
            // Put back .primary-color class + the clicked elements class with the added prefix "pm_".
            $(this).addClass("z_index"); 
	  //$( this ).css( "zIndex", "100" );
  });
  
 
 

 
  
});
