//Create a class called Pokemon

class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills=[]; //initialize skills as an array
    }
    learnAttackSkill(Skill) { //learn attack skills pushes the skills learned to the skills array.
        this.skills.push(Skill);
        console.log(`${this.name} launched skill ${Skill.name} successfully!`)
    }

    attack(index, pokemon) {
        if ((this.health === 0) || (Math.sign(this.health) === -1)) { //only give the ability to attack if the pokemon is not dead already!
            console.log(`${this.name} is dead! It cannot attack anymore!`)
        } else {
            if (this.magic !== 0) {
                this.magic -= this.skills[index].magicRequired; //subtract magic from the pokemon when attacking. 
                console.log(`${pokemon.name} got ${this.skills[index].damage}`);
            } else {
                console.log("Magic depleted, restore your magic before attacking!"); //if magic is over, show message. 
            }
            if ((pokemon.health !== 0) && (Math.sign(pokemon.health) !== -1)) { //let the pokemon keep attacking until the enemy is dead. 
                pokemon.health -= this.skills[index].damage;
            } else {
                console.log(`${pokemon.name} is dead! Enemy dead! Over. Zilch. Nada. `)
            }
        }
    }

    getMagic() {
        this.magic += 10; //add more magic. 
    }

    showStatus() { //this will log the status of the pokemon
        console.log(`${this.name} status=> health: ${this.health}, magic: ${this.magic}`)
    }
}

class AttackSkill {
    constructor(name, damage, magicRequired) {
        this.name = name;
        this.damage = damage;
        this.magicRequired = magicRequired;
    }
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);


pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(lightning);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
bulbasaur.showStatus();
bulbasaur.attack(0, pikachu);







