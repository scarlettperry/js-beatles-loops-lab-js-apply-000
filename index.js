const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments)
{
  var BeatlesLoops = [];
  
  for(var i=0; i<musicians.length; i++)
  {
      BeatlesLoops.push(musicians[i] +" plays "+ instruments[i]);
      return BeatlesLoops;
    }
}