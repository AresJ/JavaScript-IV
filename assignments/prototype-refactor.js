/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(object){
        this.createdAt = object.createdAt;
        this.name = object.name;
        this.dimensions = object.dimesions;
        }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject{
    constructor(object){
        super(object);
        this.healthPoints = object.healthPoints;
    }
    takeDamage() {
        GameObject.destroy();
    }
}

class Humanoid extends CharacterStats{
    constructor(object){
        this.team = object.team;
        this.weapons = object.weapons;
        this.language = object.language;
    }
        greet() {
            return `${this.name} offers a greeting in ${this.language}.`;
        }
        destroy(){
            CharacterStats.takeDamage;
        }
    }
}