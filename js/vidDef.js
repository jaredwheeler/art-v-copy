/*
Video Sequence Order:
|________IDLE________|___POKE_1___|___POKE_2___|___POKE_...___|___GAG_1___|___GAG_2___|___GAG_...___|
^-idleStart  idleEnd-^																	    endTime-^
*/
var idleStart		= 1; //beginning of the idle sequence
var idleEnd			= 90; //end of the idle sequence
var endTime			= 267; //total length in seconds of video
var pokes			= [{start:167, end:170, loaded:false},
					   {start:189, end:193, loaded:false},
					   {start:255, end:261, loaded:false}];
						
var gags			= [{start:170, end:189, loaded:false},
					   {start:189, end:255, loaded:false},
					   {start:255, end:267, loaded:false}];
