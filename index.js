const fighters = [
    {
    names: 'Timothy',
    hitpoints: 20,
    belongings: ['sword', 'potion', 'tums'],
    companion: {
        names: 'Velma',
        type: 'bat',
        companion: {
            names: 'Tim',
            type: 'parasite',
            belongings: ['scuba tank', 'blood', 'fruit', 'bug']
        }
    }
},
{
    names: 'Nova',
    hitpoints: 10,
    belongings: ['water', 'snacks', 'arrows', 'bow'],
    companion: {
        names: 'glitterSparkles',
        type: 'dog'
    }
},
{
    names: 'Eli',
    hitpoints: 15,
    belongings: ['pocket knife', 'bombs', 'coffee', 'mushrooms'],
    companion: {
        names: 'Pikachu',
        type: 'pokemon'
    }

}
];

// console.log(fighters.companion.companion.belongings);

// for (let i = 0; i < fighters.companion.companion.belongings.length; i++) {
//     console.log(fighters.companion.companion.belongings[i]);
//     }

// console.log(fighters[1].belongings[1]);

// for (let i = 0; i < fighters[2].belongings.length; i++) {
//     console.log(fighters[2].belongings[i]);
    
// }

const enemies = [
    {
    names: 'Dino',
    hitpoints: 25,
    type: 'Dragon',
    weapons: ['fire breath', 'claws', 'tail whip'],
    weakness: 'water'
    },
    {
    names: 'Dracula',
    hitpoints: 30,
    type: 'Vampire',
    weapons: ['fangs', 'shape shifting', 'hypnosis'],
    weakness:['sunlight', 'garlic']
    },
    {
    names: 'Bill',
    hitpoints: 10,
    type: 'human Scientist',
    weapons: ['beaker', 'volcano', 'nuclear bomb', 'shrink ray'],
    weakness: ['Wife', 'plants']
    }
];

    console.log(enemies[1].weapons);

    //(fighter) is now fighting (enemies)

// option 1
// const Fighter  = ['Timothy','Nova','Eli']
// const Enemy = ['Dino', 'Dracula', 'Bill']
// const iterations = 1
// for (let i = 0; i < iterations; i++)
// {
//     const randomIndex1 = Math.floor(Math.random() * Fighter.length);
//     const randomIndex2 = Math.floor(Math.random() * Enemy.length);
//     const randomFighter = Fighter[randomIndex1];
//     const randomEnemy = Enemy[randomIndex2];
//     console.log('Random selection:',randomFighter);
//     console.log('Enemy',randomEnemy);
// }

// option 2
for(let i = 0; i < fighters.length; i++){
    for(let j = 0; j < enemies.length; j++){
        console.log(`${fighters[i].names} is now fighting ${enemies[j].names}`);
    }
}


// option 3
// for(i = 0; i < fighters[0].names.length; i++){
//     console.log(fighters[0].names, 'vs.' ,enemies[0].names);
//     break
// }
// for(i = 1; i < fighters[1].names.length; i++){
//   console.log(fighters[1].names, 'vs.' ,enemies[1].names);
//   break
// }
// for(i = 2; i < fighters[2].names.length; i++){
//   console.log(fighters[2].names, 'vs.' , enemies[2].names);
//   break
// }

function newFighter(names, hitpoints, belongings, companionName, companionType) {
    const newFighter = {
        names,
        hitpoints,
        belongings,
        companion: {
            names:companionName,
            type: companionType
        },
    };
    fighters.push(newFighter);
}
const fighter4 = newFighter('Lance', 5, ['axe', '$50', 'silverware'], 'leo', 'lion')
const fighter5 = newFighter('Mike', 50, 'right hook', 'tony', 'tiger' )
console.log(fighter4, fighter5);

console.log(fighters);

// function addFighter(fightersArr, nameA, hitPoints, belongings, companion){
    
//     const newFighter = {
    
//             name: nameA,
//             hitPoints: hitPoints,
//             belongings: belongings,
//             companion: companion,
//     }

//     fightersArr.push(newFighter);

// };

// addFighter(tester, "what", 5, [2, 2, 3, 4], {name: "we", type: "bat"});
// console.log(tester);

// for(let i = 0; i < fighters.length; i++){
//     for(let j = 0; j < enemies.length; j++){
//         console.log(`${fighters[i].names} is now fighting ${enemies[j].names}`);
//     }
// }


 class Character{
    constructor (name, hp, items, attackPower) {
        this.name = name;
        this.hp = hp;
        this.items = items;
        this.attackPower = attackPower
    }
 }

 class Enemy{
    constructor (name, hp, type, weapons, attackPower){
    this.name= name
    this.hp = hp
    this.type = type
    this.weapons = weapons
    this.attackPower = attackPower
    }
 }
  
 const player1 = new Character('Tommy', 50, ['sword', 'water', 'snickers'], 10)


 const enemy1 = new Enemy('Ben', 25, 'rat', 'claws', 20)
 console.log(player1, enemy1);
 