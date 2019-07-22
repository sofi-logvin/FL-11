let defender;
const probability = 100;
const fullHP = 100;

class Fighter {
  constructor(_name, _damage, _hp, _agility) {
    this._name = _name;
    this._damage = _damage;
    this._hp = _hp;
    this._agility = _agility;
    this.currentHP = 100;
    this.totalWins = 0;
    this.totalLosses = 0;
  }

  get getName() {
    return this._name;
  }
  get getDamage() {
    return this._damage;
  }
  get getAgility() {
    return this._agility;
  }
  get getHealth() {
    return this._hp;
  }
  set setHealth(number) {
    this._hp = number;
  }
  attack(defender) {
    let attackProbability = Math.round(Math.random() * 100);
    console.log(attackProbability);
    // const successfullAttackProbability = probability - defender.getAgility;
    // let defendersHealthAmount = defender.getHealth;
    if (attackProbability > defender.getAgility) {
      // let defendersHealth = defender.getHealth - this.getDamage;
      // defender.dealDamage(defender.getHealth);
      defender.dealDamage(this.getDamage);
      console.log(` ${this.getName} make ${this.getDamage}  damage to ${defender.getName}`);
    } else {
      console.log(`${this.getName} attack missed`);
    }
  }

  logCombatHistory() {
    console.log(`Name: ${this.getName}, Wins: ${this.totalWins}. Losses: ${this.totalLosses}`);
  }
  heal(amountToHeal) {
    let healed = this.getHealth + amountToHeal;
    if (healed <= fullHP) {
      this.setHealth = healed;
    } else {
      this.setHealth = amountToHeal;
    }
  }
  dealDamage(amountOfDamage) {
    let damaged = this.getHealth - amountOfDamage;
    if (damaged <= 0) {
      this.setHealth = 0;
    } else {
      this.setHealth = damaged;
    }
  }
  addWin() {
    return this.totalWins++;
  }
  addLoss() {
    return this.totalLosses++;
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth === 0) {
    console.log(`${fighter1.getName} is dead and can't fight`);
  } else if (fighter2.getHealth === 0) {
    console.log(`${fighter1.getName} is dead and can't fight`);
  } else {
    while (fighter1.getHealth > 0 && fighter2.getHealth > 0 ) {
      console.log(fighter1.attack(fighter2));
      if (fighter2.getHealth > 0) {
        console.log(fighter2.attack(fighter1));
        if (fighter1.getHealth === 0) {
          console.log(`${fighter2.getName} wins!`);
          fighter2.addWin();
          fighter1.addLoss();
        }
      } else {
        console.log(`${fighter1.getName} wins!`);
        fighter1.addWin();
        fighter2.addLoss();
      }
    }   
  }
}