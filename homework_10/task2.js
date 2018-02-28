// Fixed mistakes:
// 1) If you are using ES6 in these tasks, try to use arrow function
//    (for example, `getStats: () => player`)
// 2) You can use `enemy.block()` directly in `if` statement.
//    No need to declare variable and store it


function fighter(player) {
    let info = {
        wins: 0,
        loses: 0
    };
    return {
        getName: () => player.name,
        block: () => Math.random() >= 0.5,
        getStats: () => player,
        getCombatHistory: () => info,
        fight: (enemy) => {
            let fighterAttack = player.attack;
            let enemyHp = enemy.getStats().hp;
            if (!enemy.block()) {
                enemyHp -= fighterAttack;
                enemy.getStats().hp = enemyHp;
                if (enemyHp <= 0) {
                    info.wins++;
                    enemy.getCombatHistory().loses++;
                }
                return true;
            } else {
                return false;
            }
        }
    };
}

function showResult(fighter) {
    console.log('Fighter', fighter.getName());
    console.log('- Combat stats:', fighter.getCombatHistory());
    console.log('- Properties:', fighter.getStats());
}

let fighter1 = fighter({
    name: 'John',
    attack: 100,
    hp: 100
});
let fighter2 = fighter({
    name: 'Kayn',
    attack: 50,
    hp: 300
});
let fighter3 = fighter({
    name: 'Bill',
    attack: 40,
    hp: 100
});

fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3

showResult(fighter1);
showResult(fighter2);
showResult(fighter3);