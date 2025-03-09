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
    