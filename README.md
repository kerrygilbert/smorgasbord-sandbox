smorgasbord-sanbox
===========

Ultra simple express app loads audio files from a directory and displays them on a web page using HTML5. Uses jquery-smorgasbord (https://github.com/colpanik/jquery-smorgasbord) to generate UI for audio elements.

###usage

```
git clone https://github.com/colpanik/smorgasbord.git
```

```
cd smorgasbord
npm install
```

```
cd smorgasbord
node app.js
```

In your browser:

http://localhost:3000

###adding sounds
Smorgasbord-sanbox automatically creates buttons based on the audio files you've placed in the public/sounds directory. To add new sounds, just put another file in public/sounds. 
