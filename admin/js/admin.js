
function playAnimation(audioTrackId, standByImgId, featureAudioId){
    let audioTrack = document.getElementById(audioTrackId);
    let standByImg = document.getElementById(standByImgId);
    let featureAudio = document.getElementById(featureAudioId);
    audioTrack.src="/admin/audios/audioTrack.gif";
    standByImg.src="";
    standByImg.style.display="none";
    audioTrack.style.display="block";
    featureAudio.play();
}
function pauseAnimation(audioTrackId, standByImgId, featureAudioId){
    let audioTrack = document.getElementById(audioTrackId);
    let standByImg = document.getElementById(standByImgId);
    let featureAudio = document.getElementById(featureAudioId);
    audioTrack.src="";
    standByImg.src="/admin/images/audioStandby.png";
    standByImg.style.display="block";
    audioTrack.style.display="none";
    featureAudio.pause();
}