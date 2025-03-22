function getKaiADs(){
	if (typeof getKaiAd !== 'undefined') {
		getKaiAd({
			publisher: 'ed3d6803-8550-4fc7-be5b-092dfd785e91',
			app: 'Sultan Gem Match 2',
			slot: 'Default',
			test: 0,
			onerror: err => console.error('Custom catch:', err),
			onready: ad => {
				
				gml_Script_gmcallback_KaiADisready(); 
				
			}
		})
	}
}

kaiBanner = null;

function showKaiBanner(){
    if (typeof getKaiAd !== 'undefined') {
        var adContainer;
        var adTabIndex;

        var isLandscape = 0;
        var browserWidth = window.innerWidth;
        var browserHeight = window.innerHeight;
        var bannerADwidth = 240; 
        var bannerADheight = 60;
        var bannerADy = 0;

        if (browserWidth > browserHeight){
            isLandscape = 1;
            bannerADwidth = 180;
            bannerADheight = 45;
            bannerADy = bannerADy*0.75;
        }
        
        adContainer = document.getElementById('ad-container');
        getKaiAd({
                publisher: 'ed3d6803-8550-4fc7-be5b-092dfd785e91',
                app: 'Sultan Gem Match 2',
                slot: 'Default',
                h: bannerADheight, //60
                w: bannerADwidth, //240
                container: adContainer,
                test: 0,
                onerror: err => console.error('Custom catch:', err),
                onready: ad => {
                    ad.call('display', {
                        tabindex: adTabIndex,
                        navClass: 'navItem',
                        display: 'block'
                    })

                    kaiBanner = ad
                  
                    ad.on('display', () => {
                        gml_Script_gmcallback_KaiBannerShown();
                        adContainer.style = 'position: absolute; left: 50%; top: ' + String(bannerADy) + 'px; transform: translate(-50%);';
                    })
                }
        })  
     }
}

function clickBanner(){
    if (kaiBanner != null){
        kaiBanner.call('click');
    }
}

function closeBanner(close){
    if (kaiBanner != null){
        var containerAD = document.getElementById("ad-container");
        if (close){
           
            containerAD.style.display = "none";
            gml_Script_gmcallback_bannerVisibility(null,null,0);
        }
        else{
            containerAD.style.display = "block";
            gml_Script_gmcallback_bannerVisibility(null,null,1);
        }
    }
}

function showKaiInterstitial(){
	if (typeof getKaiAd !== 'undefined') {
		getKaiAd({
			publisher: 'ed3d6803-8550-4fc7-be5b-092dfd785e91',
			app: 'Sultan Gem Match 2',
			slot: 'Default',
			test: 0,
			onerror: err => console.error('Custom catch:', err),
			onready: ad => {
				ad.call('display')

				ad.on('close', () => gml_Script_gmcallback_KaiAdClosed() )
				ad.on('display', () => gml_Script_gmcallback_KaiAdShowed() )
			}
		})	
	}
}

function vibration(ms){
    navigator.vibrate = navigator.vibrate ||
                  navigator.webkitVibrate ||
                  navigator.mozVibrate || 
                  navigator.msVibrate;
    if (navigator.vibrate) {             
		window.navigator.vibrate(ms);
    }
	
}

function handleKeyDown(evt) {
    switch (evt.key) {
        case 'Enter':
        case 'Call':
        case '5':
          	gml_Script_gmcallback_enterKey();
        break;

        case 'SoftLeft':
        	gml_Script_gmcallback_softLeft();
        break;

        case 'SoftRight':
        	gml_Script_gmcallback_softRight();
        break;

        case 'ArrowLeft':
        case '4':
        	gml_Script_gmcallback_left();
        break;

        case 'ArrowRight':
        case '6':
        	gml_Script_gmcallback_right();
        break;

        case 'ArrowUp':
        case '2':
        	gml_Script_gmcallback_up();
        break;

        case 'ArrowDown':
        case '8':
        	gml_Script_gmcallback_down();
        break;

       	case 'Backspace':
        case 'End':
        case 'Escape':
        case 'Home':
        case 'Delete':
        case 'EndCall':
       		gml_Script_gmcallback_back();
       	break;

    }
}

function handleKeyUp(evt) {
    switch (evt.key) {
        case 'Enter':
        case 'Call':
        case '5':
          	gml_Script_gmcallback_enterKeyRe();
        break;

        case 'SoftLeft':
        	gml_Script_gmcallback_softLeftRe();
        break;

        case 'SoftRight':
        	gml_Script_gmcallback_softRightRe();
        break;

        case 'ArrowLeft':
        case '4':
        	gml_Script_gmcallback_leftRe();
        break;

        case 'ArrowRight':
        case '6':
        	gml_Script_gmcallback_rightRe();
        break;

        case 'ArrowUp':
        case '2':
        	gml_Script_gmcallback_upRe();
        break;

        case 'ArrowDown':
        case '8':
        	gml_Script_gmcallback_downRe();
        break;

       	case 'Backspace':
        case 'End':
        case 'Escape':
        case 'Home':
        case 'Delete':
        case 'EndCall':
       		gml_Script_gmcallback_backRe();
       	break;

       
    }
}

function repFocus(){
	if (document.hasFocus()){
		gml_Script_gmcallback_GD_resume();
	}
}

function InitKaiOS(){
   
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);
	document.addEventListener("visibilitychange", function() {
	  if (document.visibilityState === 'visible') {
	    
	  	if (document.hasFocus()){
	    	gml_Script_gmcallback_GD_resume();
	  	}
	  	else{
	  		gml_Script_gmcallback_checkFocus();
	  	}
	    
	  } else {
	    gml_Script_gmcallback_GD_pause();
	  }
	});
	
}

function ExitKaiOS(){
	window.close();
}