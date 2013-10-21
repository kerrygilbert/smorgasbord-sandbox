var fs = require('fs');

module.exports = function(req, res) {
  fs.readdir(__dirname+'/../public/sounds', function(err, files){
    var sounds = [];

    files.forEach(function(file){
      if(file[0] !== '.') {
        var soundName = file.split('.')[0];
        var sound = {};
        sound.path = file;
        sound.name = soundName;
        sounds.push(sound);
      }

    });

    res.render('index.html', { 
      sounds: sounds
    });
  });
}