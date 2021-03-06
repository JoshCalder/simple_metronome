console.log("starting");
var BPM = Tone.Transport.bpm;
var playing = false;
var colours = ["red","orange","green","blue"];
var borderChange = ["10px","15px","20px","25px"];
var paddingChange = ["80px", "75px", "70px", "65px"];
var i = 0;
BPM.value = 120; //default

var synth = new Tone.Synth({
	"oscillator" : { 
		"type": "sine"
	},
}).toMaster();

var loop = new Tone.Sequence(function(time){
			console.log("entered loop");
			if (i%4 == 0) {
				synth.triggerAttackRelease("E4", "16n");
			} else {
				synth.triggerAttackRelease("A3", "16n");
			}
			document.getElementById("metronome").style.borderColor = colours[i%4];
			document.getElementById("metronome").style.padding = paddingChange[i%4];
			document.getElementById("metronome").style.borderWidth = borderChange[i%4];
			i++;	
		}, "4n");
Tone.Transport.start();

function changeState() {
	if (!playing) {
		loop.start();
		playing = true;
		document.getElementById("start-stop").innerHTML = "STOP";
	} else {
		loop.stop();
		playing = false;
		document.getElementById("start-stop").innerHTML = "START";
	}
}

// changes the BPM via the HTML range slider input and updates range val
function displayBPM(newBPM) {
	BPM.value = newBPM;
	document.getElementById("range").innerHTML = newBPM + " bpm";
}