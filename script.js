// function play(){
//       const homeSection = document.getElementById('home-screen');
//       homeSection.classList.add('hidden');
//       const playGround = document.getElementById('play-ground');
//       playGround.classList.remove('hidden');
// }

function hiddenElementById(elementId){
      const element = document.getElementById(elementId);
      element.classList.add('hidden');

}
function showElementById(elementId){
      const element = document.getElementById(elementId);
      element.classList.remove('hidden');
}

function play(){
      hiddenElementById('home-screen');
      showElementById('play-ground');
}