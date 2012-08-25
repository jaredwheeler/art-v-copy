var myPlayer = _V_("example_video_1");
var vidPre;
_V_("example_video_1").ready(function(){

      var myPlayer = this;

      // EXAMPLE: Start playing the video.
      //test();
	  vidPre = false;
	  startImpulse( );

    });

function test()
{
	alert("test");
}

function startImpulse()
{
	setInterval(impulse,100);
}

function impulse()
{
	//check video.js buffered %
	//if > x, fade poke btn in
	var b = myPlayer.bufferedPercent( );
	//console.log( myPlayer.bufferedPercent( ) );
	
	var bufferedTimeRange = myPlayer.buffered(),
	// Number of different ranges of time have been buffered. Usually 1.
    numberOfRanges = bufferedTimeRange.length,
    // Time in seconds when the first range starts. Usually 0.
    firstRangeStart = bufferedTimeRange.start(0),
    // Time in seconds when the first range ends
    firstRangeEnd = bufferedTimeRange.end(0),
    // Length in seconds of the first time range
    firstRangeLength = firstRangeEnd - firstRangeStart;
	console.log(firstRangeLength);

	if( b > 0.2 && !vidPre )
	{
		vidPreDone( );
	}
}

function vidPreDone( )
{
	vidPre = true;
	//alert( "video preloaded" );
	console.log("video preloaded");
	console.log($("#pokeBtn"));
	$("#pokeBtn").fadeIn();
	myPlayer.play();
}

function poke( )
{
	
}