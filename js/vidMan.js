var vPlayer = _V_("main_video");
var vidReady;
var vidPlayState;

_V_("main_video").ready(function(){
	console.log("video ready")
  	vidReady = true;
});

function updateVidMan( )
{
	switch( vidPlayState )
	{
		case "idle":
			if( vPlayer.currentTime( ) > idleEnd )
			{
				vPlayer.currentTime( idleStart );
			}
			break;
		case "poke1":
			if( vPlayer.currentTime( ) > poke1End )
			{
				playIdle( );
			}
			break;
		case "poke2":
			if( vPlayer.currentTime( ) > poke2End )
			{
				playIdle( );
			}
			break;
		case "poke3":
			if( vPlayer.currentTime( ) > poke3End )
			{
				playIdle( );
			}
			break;
	}
}

function playIdle( )
{
	vPlayer.play( );
	vPlayer.currentTime( idleStart );
	vidPlayState = "idle";
}

function playPoke1( )
{
	vPlayer.currentTime( poke1Start );
	vidPlayState = "poke1";
}

function playPoke2( )
{
	vPlayer.currentTime( poke2Start );
	vidPlayState = "poke2";
}

function playPoke3( )
{
	vPlayer.currentTime( poke3Start );
	vidPlayState = "poke3";
}