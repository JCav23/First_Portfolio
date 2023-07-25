function gameOver(){
  let myImage = document.querySelector('img');
  myImage.setAttribute('src', 'Images/Game-Over.jpg');
  myImage.setAttribute('width', '300');
}

function oneDiceRoll(){
  let oneDie = Math.floor(Math.random()*6)+1;
  document.getElementById('one-roll-output').innerHTML=oneDie;
  return oneDie;
}

document.getElementById('roll-one').addEventListener('click', oneDiceRoll);


function twoDiceRoll(){
  let one = Math.floor(Math.random()*6)+1;
  let two = Math.floor(Math.random()*6)+1;
  let twoDice = one + two
  document.getElementById('two-roll-output').innerHTML=twoDice;
  return twoDice;
}

document.getElementById('roll-two').addEventListener('click', twoDiceRoll);


function enterName(){
  let text = document.getElementById('input').value;
  document.getElementById('name').innerHTML = text
  document.getElementById('adventurerID').innerHTML = text;
  beginJourney();
}

document.getElementById('submit').addEventListener('click', enterName);
document.getElementById('input').addEventListener('keydown', function (e){
  if (e.key === 'Enter') {
    document.getElementById('submit').click();
  }
});

function enterHealth(){
  let stat1 = (document.getElementById('input').value);
  document.getElementById('health').innerHTML = (Number(stat1) + 12);
  nextStat();
}
function enterStrength(){
    let stat2 = (document.getElementById('input').value);
    document.getElementById('strength').innerHTML = (Number(stat2) + 6);
    nextStat();
}

function enterLuck(){
  let stat3 = (document.getElementById('input').value);
  document.getElementById('luck').innerHTML = (Number(stat3) + 6);
  startPrologue();
}

function startPrologue(){
  document.getElementById('main-text').innerHTML = 'Excellent, you are now ready to begin your journey.' + "<br><br>" + 'You have left home, tired of the provincial life, seeking adventure & fortune. After months of travel, you have not had an easy time and with little gold left, the road has left you exhausted. While resting one evening in a local tavern, you are almost ready to give up and head back to a quiet life on your family farm when you overhear voices from across the room.' + "<br><br>" + 'Would you like to listen to the voices or mind your own business?' + "<br><br>" + '(Input: \'Listen\' or \'Walk Away\')';
  changeImage();
  document.getElementById('submit').removeEventListener('click', enterLuck);
  document.getElementById('submit').addEventListener('click', tavernChoice);
}

function nextStat(){
  if (document.getElementById('strength').innerHTML == 0 && document.getElementById('luck').innerHTML == 0){
    document.getElementById('main-text').innerHTML = 'Excellent, you can follow basic instruction, that bodes well!' + "<br><br>" + 'Now for your strength, roll one dice and input your results and your strength will be calculated by adding 6 to your roll';
    document.getElementById('submit').removeEventListener('click', enterHealth);
    document.getElementById('submit').addEventListener('click', enterStrength);
  } else if (document.getElementById('strength').innerHTML > 0 && document.getElementById('luck').innerHTML == 0) {
    document.getElementById('main-text').innerHTML = 'Lastly, enter your Luck. Your luck may save your life during your adventure. Even the mightiest of warriors and the wisest of kings cannot escape the hands of fate.' + "<br><br>" + 'As with your Strength, roll a single die and your luck will be calculated by adding 6 to your roll';
    document.getElementById('submit').removeEventListener('click', enterStrength);
    document.getElementById('submit').addEventListener('click', enterLuck);
  }
}

function beginJourney(){
  document.getElementById('main-text').innerHTML = 'Welcome, I am here to be your guide. your journey will test you in more ways than you can imagine, you will need to use all your might and wits to best the challenges ahead.' + "<br><br>"  + 'Please roll using the dice over on the right for your stats, and submit your results into the adventure sheet below.' + "<br><br>" + 'Firstly, roll two dice for your health, and input the result into the text box below and your Health will be calculated by adding 12 to your roll.'
  changeImage();
  document.getElementById('submit').removeEventListener('click', enterName);
  document.getElementById('submit').addEventListener('click', enterHealth);
}

function tavernChoice(){
  let choice = document.getElementById('input').value;
  choice = choice.toLowerCase();
    if (choice == 'listen'){
      document.getElementById('main-text').innerHTML = 'The voices seem to be coming from a group of patrons huddled around the fireplace. They are all wearing studded armour and all equipped with various weapons such as steel swords and daggers.' + "<br><br>" + 'You notice one stout bearded fellow who appears to be a dwarf, that has a huge battleaxe lying at his feet. You overhear them talking about the next morning when they seem to be undertaking in an expedition to somewhere they call \'Black Isle\'.' + "<br><br>" + 'You have never heard of such a place however from what you can overhear, they seem to believe there is vast wealth on the island and they are setting out to claim this treasure. You decide this will be your last chance to find the fortune you seek.' + "<br><br>" + 'Would you like to speak to them or return to your seat?' + "<br><br>" + '(Input: \'Speak\' or \'Walk Away\')';
      changeImage();
      document.getElementById('submit').removeEventListener('click', tavernChoice);
      document.getElementById('submit').addEventListener('click', dwarfChallenge);
  } else if (choice == 'walk away') {
      document.getElementById('main-text').innerHTML = 'After such a grueling journey your bruises and empty pockets weigh heavily on you. You decide the adventuring life is not for you and with your tail between your legs you return home the following morning, resigning yourself to a quiet life.' + "<br><br>" + 'Your Journey is over.';
      gameOver();
  } else {
    alert('Please Enter Valid Input.');
  }
}

function dwarfChallenge(){
  let choice = document.getElementById('input').value;
  choice = choice.toLowerCase();
    if (choice == 'speak') {
    document.getElementById('main-text').innerHTML = 'You clear your throat loudly and the group whirl towards to you, alarmed. Some quickly begin to draw their weapons, not wishing to start any trouble you quickly explain you are seeking fortune and would like to join them on their expedition. They begin to mutter amoungst themselves quietly.' + "<br><br>" + 'After a short while, they turn back towards you and the dwarf you noticed earlier steps forward. \'Aye, you may wish to join us, but we can\'t take some fool who will get themself, or more importantly one of us, killed! If you can best me in combat then you may join us.\'' + "<br><br>" + 'Do you wish to accept his challenge?' + "<br><br>" + '(Input: \'Follow\' or \'Run\')'
    changeImage();
    document.getElementById('submit').removeEventListener('click', dwarfChallenge);
    document.getElementById('submit').addEventListener('click', challengeAccepted);
  } else if (choice == 'walk away') {
    document.getElementById('main-text').innerHTML = 'After inspecting how well armed the group are, you feel out of your depth compared to these experienced warriors. You decide the adventuring life is not for you and with your tail between your legs you return home the following morning, resigning yourself to a quiet life.' + "<br><br>" + 'Your Journey is over.';
    gameOver();
  } else {
    alert('Please Enter Valid Input.');
  }
}

function challengeAccepted(){
   let choice = document.getElementById('input').value;
   choice = choice.toLowerCase();
   if (choice == 'follow'){
    document.getElementById('main-text').innerHTML = 'The dwarf thrusts a battered old sword into your hands, and in a gruff voice says, \'follow me.\' He marches out to the yard behind the tavern with you in tow, followed by the group of rowdy adventurers who are contemplating the victor and making wagers. You ready yourself to fight.' + "<br><br>" + 'Notice the Dwarf\'s stats are now in the Battle box on your right. You will roll one die for each of your attacks. The resulting roll will be added to the your strength, the dwarf will also make an attack that is calculated with a roll added to his strength. The highest score wins and will reduce the opponents health by 2. This cycle will repeat until only one remains.' + "<br><br>" + 'Begin with your first attack roll and let the battle commence';
    document.getElementById('slot1').innerHTML = 'Old Rusty Sword';
    document.getElementById('monsterID').innerHTML = 'Dwarf';
    document.getElementById('monsterName').innerHTML = 'Dwarf';
    document.getElementById('combatstat1').innerHTML = '6';
    document.getElementById('combatstat2').innerHTML = '9';
    document.getElementById('submit').removeEventListener('click', challengeAccepted);
    document.getElementById('submit').addEventListener('click', Battle);
   } else if (choice == 'run'){
    document.getElementById('main-text').innerHTML = 'You cower away from the dwarf\'s challenge, and as you retreat you hear the group laughing at your embarrasing display. You decide the adventuring life is not for you and with your tail between your legs you return home the following morning, resigning yourself to a quiet life.' + "<br><br>" + 'Your Journey is over.';
    gameOver();
   } else {
      alert('Please Enter Valid Input');
   }
}

function Battle(){
  document.getElementById('main-text').innerHTML = 'FIGHT! Input each roll until one of you falls!'
  let yourAttack = (Number(document.getElementById('input').value) + Number(document.getElementById('strength').innerHTML));
  document.getElementById('adventurerAttack').innerHTML = Number(yourAttack);
  let monsterAttack = (Math.floor(Math.random()*6)+1 + Number(document.getElementById('combatstat2').innerHTML));
  document.getElementById('monsterAttack').innerHTML = Number(monsterAttack);
    if (yourAttack > monsterAttack){
      document.getElementById('combatstat1').innerHTML -= 2;
      alert('Your attack was successful!');
      if (document.getElementById('combatstat1').innerHTML == '0'){
        chapterEnd();
      }
    } else if (monsterAttack > yourAttack){
      document.getElementById('health').innerHTML -= 2;
      alert('You have taken damage!');
      if (document.getElementById('health').innerHTML == '0'){
        chapterEnd();
      }
    } else if (yourAttack === monsterAttack) {
      alert('Your attack was blocked!');
    }
  }

function chapterEnd(){
  let choice = document.getElementById('input').value;
  choice = choice.toLowerCase();
    if (document.getElementById('combatstat1').innerHTML == '0') {
    document.getElementById('main-text').innerHTML = 'With a final swing of your sword, you catch the dwarf off guard, and hit him hard in the chest. From the strength of your blow, he is sent clattering to the floor in a heap.' + '<br><br>' + 'For a moment there is a stunned silence before the crowd that has gathered around erupts into a mixture of cheers and groans as handfuls of coins exchanging hands. It appears not many had faith in you, but for those who did, have made a fair bit of coin.' + '<br><br>' + 'You help the dwarf to his feet, and with a satisfied chuckle, he turns to you' + '<br><br>' + '\'It\'s been quite a while since someone gave me such a thrashing. We would be honored to have such a formidable warrior join us. Now, let\'s have an ale and toast your victory\'.' + '<br><br>' + '(Input: \'Toast\')';
    document.getElementById('submit').removeEventListener('click', chapterEnd);
    document.getElementById('submit').addEventListener('click', toast);
  } else if (document.getElementById('health').innerHTML == '0'){
    document.getElementById('main-text').innerHTML = 'After a tough battle, you begin to falter, and suddenly the dwarf slams the pommel of his axe into your face and everything goes black.' + '<br><br>' + 'You awake the next morning facedown in the mud where you fell, there is no sight of the adventurers and with dismay you realise they have emptied your pockets of what little gold you had remaining.' + '<br><br>' + 'Bruised and dejected, you begin to trudge along the begining of the long journey home.' + '<br><br>' + 'Your Journey is over.';
    gameOver();
  }
}

function toast(){
  let choice = document.getElementById('input').value;
  choice = choice.toLowerCase();
  if (choice == 'toast') {
  document.getElementById('main-text').innerHTML = 'You join the group of adventurers in a toast, and spend the rest of the evening being regaled with stories of triumphant battles, and learn more about your destination and legends of the mysterious \'Black Isle\'.' + '<br><br>' + 'As you finally arrive to your room at the end of the night your head is full of hopes of the vast wealth that await you on the island, and as your head hits the pillow of your bed, you quickly drift off to sleep.' + '<br><br>' + 'Tomorrow, your adventure truly begins!' + '<br><br>' + 'Congratulations, You have completed Chapter 1. More adventure awaits with new updates coming soon with new features being added.' + '<br><br>' + 'Thank you for Playing.';
  changeImage();
  }
}

function changeImage(){
  let myImage = document.querySelector('img');
  let mySRC = myImage.getAttribute('src');
  if (mySRC === 'Images/Dragon.jpg'){
    myImage.setAttribute('src', 'Images/Wizard.jpg');
  }  else if (mySRC === 'Images/Wizard.jpg'){
      myImage.setAttribute('src', 'Images/Tavern.jpg');
      myImage.setAttribute('width', '500');
  }  else if (mySRC === 'Images/Tavern.jpg'){
      myImage.setAttribute('src', 'Images/Island.jpg');
      myImage.setAttribute('width', '300');
  }  else if (mySRC === 'Images/Island.jpg'){
    myImage.setAttribute('src', 'Images/Dwarf.jpg');
    myImage.setAttribute('width', '300');
  } else if (mySRC === 'Images/Dwarf.jpg'){
    myImage.setAttribute('src', 'Images/Ale.jpg');
    myImage.setAttribute('width', '300');
  }
}