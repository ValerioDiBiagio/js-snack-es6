// creazione array bici

const bikes = [
    {
        name: 'Look',
        weight: 7.3
    },
    {
        name: 'Pinarello',
        weight: 6.8
    },
    {
        name: 'Colnago',
        weight: 7
    },
    {
        name: 'Canyon',
        weight: 7.8
    },
    {
        name: 'Specialized',
        weight: 7.6
    }
]

// creare array vuoto

const arrayBikes = [];

for (let i = 0; i < bikes.length; i++) {
    arrayBikes.push(bikes[i].weight);
}

console.log(arrayBikes);

// ordinare gli elementi dal numero più basso al più alto

arrayBikes.sort();
console.log(arrayBikes);

// trovare la bici con il peso minore

for (let i = 0; i < bikes.length; i++) {
    
    if (arrayBikes[0] === bikes[i].weight) {
        console.log(bikes[i].name);
    }
}

