const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var BeatlesLoops = [];

function theBeatlesPlay(musicians, instruments){
  for(var i=0; i<musicians.length; i++){
    for (var j=0; j<instruments.length; j++){
      BeatlesLoops.push(musicians[i]+" plays "+instruments[j])
      return BeatlesLoops;
    }
    
  }
}