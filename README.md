smorgasbord
===========

Ultra simple express app loads audio files from a directory and displays them on a web page using HTML5.

This is the first iteration. I will eventually break the express app part of this out into a separate repository and smorgasbord will become an npm module.

##usage

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

##adding sounds
Smorgasbord automatically creates buttons based on the audio files you've placed in the public/sounds directory. To add new sounds, just put another file in public/sounds. 