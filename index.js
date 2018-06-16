var BeatlesLoops = [];

function theBeatlesPlay(m, inst){
  
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

  for(var i=0; i<musicians.length; i++){
    for (var j=0; j<instruments.length; j++){
      BeatlesLoops.push([i]+" plays "+[j])
      return BeatlesLoops;
    }
    
  }
}