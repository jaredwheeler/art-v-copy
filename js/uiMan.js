//#import "vidMan.js";
//#import "vidDef.js";


function changeUIState( str )
{
	uiState = str;
}

function updateUI( )
{
	switch( uiState )
	{
		case "uiInit":
			console.log( "uiInit" );
			if(vidReady == true)
			{
				
				changeUIState( "playerReady" );
			}
			break;
		case "playerReady":
			console.log( "playerReady" );
			changeUIState( "vidPreload" );
			break;
		case "vidPreload":
			//console.log( "vidPreload" );
			//check for buffer percent
			//advance state to playIdle when ready
			var bRange = vPlayer.buffered(),
			// Number of different ranges of time have been buffered. Usually 1.
		    //numberOfRanges = bufferedTimeRange.length,
		    // Time in seconds when the first range starts. Usually 0.
		    start = bRange.start(0),
		    // Time in seconds when the first range ends
		    end = bRange.end(0),
		    // Length in seconds of the first time range
		    len = end - start;
			//console.log(len);
			if( len > 30 )
			{
				playIdle( );
				changeUIState( "vidPlayIdle" );
				$("#preload").fadeOut();
				$("#ui").fadeIn();
			}
			break;
		case "vidPlayIdle":
			//console.log("vidPlayIdle");
			break;
		case "vidPreload":

			break;
		case "vidPlayIdle":

			break;
		case "vidPlayPoke":
			if( vidPlayState == "idle" )
			{
				$("#pokeBtn").fadeIn();
				changeUIState( "vidPlayIdle" );
			}
			break;
		case "vidPlaySeg":

			break;
		case "vidPlayStinger":

			break;
	}
}

function handlePoke( )
{
	changeUIState( "vidPlayPoke" );
	var num = Math.ceil( Math.random( ) * 3 );
	console.log( num );
	switch( num )
	{
		case 1:
			playPoke1( );
			break;
		case 2:
			playPoke2( );
			break;
		case 3:
			playPoke3( );
			break;
	}
	$("#pokeBtn").fadeOut();
}

function showRickyBio( )
{
	
}

function showCaseyBio( )
{
	
}