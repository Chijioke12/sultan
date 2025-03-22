function ImageLoadBar_hook(ctx, width, height, total, current, image) {

	var progress = (current/total)*100;

	var browserWidth = window.innerWidth;
	var browserHeight = window.innerHeight;

	var myCanvas = document.getElementById("canvas");

	if (browserWidth > browserHeight){
		myCanvas.width = browserHeight*(240/320);
		myCanvas.height = browserHeight;		
	}
	else{
		myCanvas.width = browserWidth;
		myCanvas.height = browserWidth/(240/320);
	}
	
	myCanvas.style = "position: absolute; top: 50%; left: 50%; bottom: -50%; right: -50%; transform: translate(-50%, -50%);";

	if (progress >= 100){
		var preLoader = document.getElementById("GM4HTML5_loadingscreen");
		preLoader.style = "display:none;";	
	}
}