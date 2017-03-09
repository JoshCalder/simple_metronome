console.log("starting");
var BPM = Tone.Transport.bpm;
BPM.value = 120;

var player = new Tone.Player("./audio/woodblock.wav").toMaster();
var loop = new Tone.Sequence(function(time){
			console.log("entered loop");
			player.start(time);	
		}, "4n");
Tone.Transport.start();

// starts the metronome
function start() {	
	loop.start();
}

// pauses the metronome
function stop() {
	loop.stop();
}	

// changes the BPM via the HTML range slider input and updates range val
function displayBPM(newBPM) {
	BPM.value = newBPM;
	document.getElementById("range").innerHTML = newBPM;

}