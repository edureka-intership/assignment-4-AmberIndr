const ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]

const mapData = ratingData.reduce((acc, { restaurant, rating }) => {
    const match = acc.get(restaurant);
    match ?
        match.push(rating) :
        acc.set(restaurant, [rating]);
    return acc;
}, new Map);
console.log(mapData);

const averageArray = Array.from(mapData, ([restaurant, ratings]) => {
    const rating = ratings.reduce((a, r) => (a + r)) / ratings.length;
    return { restaurant, rating }
});
// console.log(averageArray);
for(let newobject of averageArray){
    if(newobject.rating>=4){
        console.log(newobject)
    }
}