var appState = "none";
var currentPoke;
var currentGag;
var vid;

function changeAppState(str)
{
	appState = str;
}

//Set up an interval that calls loop() 10x/second
function startLoop()
{
	setInterval(loop,100);
}

//Main program loop, branched into app states
function loop()
{
	switch(appState)
	{
		case "none":
			vid = document.getElementById("main_video");
			console.log(vid);
			if(vid)
			{
				vid.addEventListener('progress', updatePreload, false);
				changeAppState("preload");
			}
			break;
		case "preload":
			if(!pokes[0].loaded)
			{
				updatePreload();
			}
			else
			{
				preloadComplete();
			}
			break;
		case "idle":
			//loop the idle segment
			if(vid.currentTime >= idleEnd)
			{
				playIdle();
			}
			break;
		case "poke":
			//track playhead position in current segment
			//as it reaches the value for 'end', return to idle loop
			if( vid.currentTime >= pokes[currentPoke].end )
			{
				playIdle();
			}
			break;
		case "gag":
			//track playhead position in current segment
			//as it reaches the value for 'end', return to idle loop
			if( vid.currentTime >= gags[currentGag].end )
			{
				playIdle();
			}
			break;
	}
}

function updatePreload()
{
	//calculate percentage of preload completed
	//update the preload visualization with percent complete
	
	//tell VidLoadMan.js to update
	updateSequencesLoaded();
}

function preloadComplete()
{
	//preload has finished, go into idle mode
	playIdle();
	$("#preload").fadeOut();
	$("#ui").fadeIn();
}

function handleCTAClick()
{
	//randomly poke() OR gag()
	if(appState == "idle")
	{
		$("#pokeBtn").fadeOut();
		var num = Math.random();
		if(num > 0.35)
		{
			poke();
		}
		else
		{
			if(gags[0].loaded) //first check to see if at least the first gag segment has loaded
			{
				gag();
			}
			else //if not, just play a poke
			{
				poke();
			}
		}
	}
}

function playIdle()
{
	//set the playhead to the beginning of the "idle sequence"
	vid.currentTime = idleStart;
	$("#pokeBtn").fadeIn();
	changeAppState("idle");
}

function poke()
{
	//collect all loaded poke segments in vidDef and randomly select one
	console.log("poke");
	var pokesLoaded = 0;
	var selectedPoke;
	for(var i=0; i<pokes.length; i++)
	{
		//loop thru pokes array and tally all the objects where loaded == true
		if(pokes[i].loaded)
		{
			pokesLoaded++;
		}
	}
	//pick a random poke within that range of loaded pokes
	selectedPoke = Math.floor( Math.random() * pokesLoaded );
	currentPoke = selectedPoke;
	//seek the video player to the start time of the selected poke
	vid.currentTime = pokes[selectedPoke].start;
	
	changeAppState("poke");
}

function gag()
{
	//collect all loaded gag segments in vidDef
	console.log("gag");
	var gagsLoaded = 0;
	var selectedGag;
	for(var i=0; i<gags.length; i++)
	{
		//loop thru gags array and tally all the objects where loaded == true
		if(gags[i].loaded)
		{
			gagsLoaded++;
		}
	}
	//pick a random gag within that range of loaded gags
	selectedGag = Math.floor(Math.random() * gagsLoaded);
	currentGag = selectedGag;
	//seek the video player to the start time of the selected gag
	vid.currentTime = gags[selectedGag].start;
		
	changeAppState("gag");
}