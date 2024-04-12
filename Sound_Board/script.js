const sounds = ['applause','boo','gasp','tada','victory','tada'];

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerHTML = sound

    btn.addEventListener('click',()=> {
        stopSongs()

        document.getElementById(sound).play()
    })
    //we have play method in html5 for audio files

    document.getElementById('buttons').appendChild(btn)
    //we can now see our  buttons
})
function stopSongs(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)

        song.pause()
        song.ariaCurrent = 0;
        //thats how we can stop a song
    })
}