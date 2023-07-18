export const shuffleCards = (arrayWithObjects) => {
    for (let i = arrayWithObjects.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrayWithObjects[i], arrayWithObjects[j]] = [
            arrayWithObjects[j],
            arrayWithObjects[i],
        ];
    }
};
