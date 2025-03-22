function runs_on_desktop()
{
	var isWindows = (navigator.userAgent.toLowerCase().indexOf("windows nt") != -1
		&& navigator.userAgent.toLowerCase().indexOf("touch") == -1);
	var isMacintosh = (navigator.userAgent.toLowerCase().indexOf("macintosh") != -1);
	var isLinux = (navigator.userAgent.toLowerCase().indexOf("linux") != -1
		&& navigator.userAgent.toLowerCase().indexOf("android") == -1);
		
	return isWindows || isMacintosh || isLinux;
}
 
var musicToPlay = null;
 
/*
 * Plays and loops a music file AFTER the user RELEASES
 * their finger from the canvas. There must be the music
 * files in the "html5game" directory.
 * There must be 2 versions of the same file: a .mp3 and a .ogg.
 * @param file File name WITHOUT EXTENSION!
*/

function tizen_get_audio_volume()
{
        var audio = document.getElementById("gameMusic");
	if (audio)
	{
		return audio.volume;
	}
        else{
        	return -1.0;
	}	
}

function tizen_set_audio_volume()
{
        var audio = document.getElementById("gameMusic");
	if (audio)
	{
		audio.volume = 1.0;
	}
}

function tizen_audio_is_playing()
{
        var audio = document.getElementById("gameMusic");
	if (audio)
	{
		return !audio.paused;
	}
        else{
		return 0;
        	//return -1.0;
	}	
}

function html5_play_sound(file){
	startSound(file);
}

function startSound(file)
{
	// first of all delete the audio element if already exists
	var audios = document.getElementById("gameSound");
	
	/*if (audios)
	{
		audios.parentNode.removeChild(audios);
	}*/
	
	// create a new audio element
	audios = document.createElement("audio");
	audios.setAttribute("id", "gameSound");
	//audios.setAttribute("loop", "false");
	
	//var mp3 = document.createElement("source");
	//mp3.setAttribute("src", "html5game/" + file + ".mp3");
	//mp3.setAttribute("type", "audio/mpeg");
	//audio.appendChild(mp3);
	
	var oggs = document.createElement("source");
	oggs.setAttribute("src", "html5game/" + file + ".ogg");
	oggs.setAttribute("type", "audio/ogg");
	audios.appendChild(oggs);
	
	audios.play();
 
        //document.body.appendChild(audios);
}


function html5_play_music(file)
{
	//if (!runs_on_desktop())
	//{
		//musicToPlay = file;
		//var canvas = document.getElementById("canvas");
		//canvas.addEventListener("touchstart", startMusicOnMobile, false);
	//}
	//else
		startMusic(file);

}
 
function startMusicOnMobile()
{	
	event.preventDefault();
	
	if (musicToPlay == null || musicToPlay == "")
		return;
	
	startMusic(musicToPlay);
	musicToPlay = null;
	
	setTimeout(
		function()
		{
			var canvas = document.getElementById("canvas");
			canvas.removeListener("touchstart", startMusicOnMobile, false);
		},
		1);
}
 
function startMusic(file)
{
	// first of all delete the audio element if already exists
	var audio = document.getElementById("gameMusic");
	if (audio)
	{
		audio.parentNode.removeChild(audio);
	}
	
	// create a new audio element
	audio = document.createElement("audio");
	audio.setAttribute("id", "gameMusic");
	audio.setAttribute("loop", "true");
	
	//var mp3 = document.createElement("source");
	//mp3.setAttribute("src", "html5game/" + file + ".mp3");
	//mp3.setAttribute("type", "audio/mpeg");
	//audio.appendChild(mp3);
	
	var ogg = document.createElement("source");
	ogg.setAttribute("src", "html5game/" + file + ".ogg");
	ogg.setAttribute("type", "audio/ogg");
	audio.appendChild(ogg);
	
	audio.play();
 
        document.body.appendChild(audio);
}
function stopMusic()
{
	var audiom = document.getElementById("gameMusic");
	if (audiom)
	{
		audiom.parentNode.removeChild(audiom);
	}
}