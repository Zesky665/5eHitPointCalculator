function getConMod(val){
  if (val%2 == 1){
    val = val - 1
  }
    switch(val){
      case 0:
        return -5;
      break;

      case 2:
        return -4;
      break;

      case 4:
        return -3;
      break;

      case 6:
        return -2;
      break;

      case 8:
        return -1;
      break;

      case 10:
        return 0;
      break;

      case 12:
        return 1;
      break;

      case 14:
        return 2;
      break;

      case 16:
        return 3;
      break;

      case 18:
        return 4;
      break;

      case 20:
        return 5;
      break;

      case 22:
        return 6;
      break;

      case 24:
        return 7;
      break;

    }
}

function rollHitDie(lev, die, total) {
    if(lev == 0){
      return total;
    }else{
      total = total + Math.floor(Math.random() * (die-1)) + 1;
      return rollHitDie(lev-1, die, total);
    }
}

function getHp() {
    var hp = document.getElementById('hp').value;
    var new_hp = parseInt(hp,10);
    var standard = document.getElementById('m-f').checked;
    var adventure_rule = document.getElementById('adv-r').value;
    var average_rule = document.getElementById('avg-rule').checked;
    var racial_feature = document.getElementById('r-f').checked;
    var class_feature = document.getElementById('c-f').checked;
    var feat = document.getElementById('f').checked;
    var hitDie = parseInt(document.getElementById('htd').value,10);
    var conMod = getConMod(parseInt(document.getElementById('ConScore').value,10));
    var level = parseInt(document.getElementById('lev').value,10);



    if(standard == true && average_rule == true){
      new_hp = hitDie + (level-1)*(hitDie/2 +1) + conMod*level
    }
    else if(standard == true){
      new_hp = hitDie + rollHitDie(level-1,hitDie,0) + conMod*level
    }
    else if(average_rule == true){
      new_hp = level*(hitDie/2 + 1 + conMod)
    }
    else{
      new_hp = rollHitDie(level,hitDie, 0) + conMod*level
    }

    if (racial_feature==true) {
      new_hp = new_hp + level
    }
    if (class_feature==true) {
      new_hp = new_hp + level
    }
    if (feat==true) {
      new_hp = new_hp + level
    }

    //window.alert("Avg : " + average_rule + " Max : " + standard)


    document.getElementById('hp').innerHTML = new_hp;
    //return new_hp;
}
