// array di oggetti di squadre di calcio

const footballClubs = [

    {
        team: 'Milan',
        fouls: 0,
        goals: 0
    },
    {
        team: 'Fiorentina',
        fouls: 0,
        goals: 0
    },
    {
        team: 'Lazio',
        fouls: 0,
        goals: 0
    },
    {
        team: 'Juventus',
        fouls: 0,
        goals: 0
    },
    {
        team: 'Inter',
        fouls: 0,
        goals: 0
    }  
]

// generare numeri random

function genRandomNumbers (min,max) {

    const ranNumbers = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNumbers;  
}

// assegnare i numeri random

for (let i = 0; i < footballClubs.length; i++) {

    const clubsFouls = genRandomNumbers(0,10);
    const clubsGoals = genRandomNumbers(0,10);
    footballClubs[i].fouls = clubsFouls;
    footballClubs[i].goals = clubsGoals;
}

console.log(footballClubs);
