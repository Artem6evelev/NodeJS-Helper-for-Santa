const fs = require('fs');
// 1 - What floor does Santa end up on
// ( --> should gp UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
     fs.readFile('./santa.txt', (err, data) => {
         console.time('q1 = santa-time');
         const directions = data.toString();
        //  console.log(directions);
         const directionsArray = directions.split('');
        //  console.log(directionsArray);
         const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
         }, 0);
         console.timeEnd('q1 = santa-time');
         console.log('floor:', answer);
     })
}

question1()


// 2 - When does Santa first enter the basement
function question2() {
        fs.readFile('./santa.txt', (err, data) => {
            console.time('q2 = santa-time');
            const directions = data.toString();
           //  console.log(directions);
            const directionsArray = directions.split('');
        let accumulator = 0
        let counter = 0
        const answer = directionsArray.some((currentItem) => { // look through the array and if it's matches will stop looping
            if (currentItem === '(') {
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            }
            counter ++
            return accumulator < 0;
        }) 
        console.timeEnd('q2 = santa-time');
        console.log('basement entered at:', counter);
    })
}

question2()