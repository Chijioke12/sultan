function sfx_sound_initialize (Filename) { 

var sound = new Howl({

  src: ['html5game/'+Filename+'.ogg','html5game/'+Filename+'.mp3']

});

return  {"sound":sound};

};

//---------------------------------------->

function sfx_sound_play (sound_obj , Loop) { 

var loop_snd = (Loop==true)

var sndId=sound_obj.sound.play();

sound_obj.sound.loop(loop_snd);

//return  {"sound":sound_obj.sound, "soundId":sndId};

};

//---------------------------------------->

function sfx_sound_play_from_file (Filename) { 

var sound = new Howl({

  src: ['html5game/'+Filename+'.ogg','html5game/'+Filename+'.mp3'],
  
  onload: function() {sound.play();},
  onend:  function() {sound.unload();}
});

//var sndId=sound.play();

//console.log({"sound":sound, "soundId":sndId});

//return  {"sound":sound, "soundId":sndId};

};

//---------------------------------------->
function sfx_sound_stop (sound_obj) { 
 
//console.log(sound_obj );

    if ( sound_obj.sound.playing(sound_obj.soundId) ) 
 		{ 
	     sound_obj.sound.stop(sound_obj.soundId); 
		}  
};

//---------------------------------------->

function sfx_sound_is_playing( sound_obj ) { 
 
    if ( sound_obj.sound.playing(sound_obj.soundId) )  { return true; }  else { return false; }  
};
//---------------------------------------->

function sfx_sound_fade ( from, to, duration, sound_obj ) {

         sound_obj.sound.fade( from, to, duration, sound_obj.soundId ) ;	 
 
};
//---------------------------------------->

function sfx_sound_destroy ( sound_obj ) {
	
	    sound_obj.sound.unload();
}


//---------------------------------------->
function sfx_global_volume ( new_volume ) {
	
	    Howler.volume(new_volume);
}

//---------------------------------------->

function sfx_global_mute () {
	
	    Howler.mute(true);
		//console.log('Muted !');
};


//---------------------------------------->

function sfx_global_unmute () {
	
	    Howler.mute(false);
	    //console.log('Unmuted !');
};

//---------------------------------------->
