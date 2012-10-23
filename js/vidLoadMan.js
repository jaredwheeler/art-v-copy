//Track the load of the video
//As sequences buffer in, set their loaded = true in VidDef.js

function updateSequencesLoaded()
{
	//check buffered position
	//set any poke/gag that ends *before* the buffered time to loaded
	if(vid.buffered.length>0)
	{
		for(var i=0;i<pokes.length;i++)
		{
			if(!pokes[i].loaded)
			{
				if(vid.buffered.end(0)>pokes[i].end)
				{
					pokes[i].loaded = true;
				}
			}
		}
	
		for(var i=0;i<gags.length;i++)
		{
			if(!gags[i].loaded)
			{
				if(vid.buffered.end(0)>gags[i].end)
				{
					gags[i].loaded = true;
				}
			}
		}
	}
}