const fs = require('fs/promises');

let leftList = [];
let rightList = [];
let similarityScore = 0;

async function solution() {
    try {
        const data = await fs.readFile('./day_1_2/input.txt');
        const content = data.toString();
        const lines = content.split('\n');

        for (let line of lines) {
            const lineContent = line.split('   ');
            leftList.push(parseInt(lineContent[0]));
            rightList.push(parseInt(lineContent[1]));
        }

        for (let i = 0; i < leftList.length; i++) {
            let count = 0;
            for (let j = 0; j < rightList.length; j++) {
                if(leftList[i] === rightList[j]) {
                    count++;
                }
            }

            similarityScore += leftList[i] * count;
        }

        console.log(similarityScore);

    } catch (err) {
        console.error('Fehler beim Lesen der Datei:', err);
    }
}


module.exports = solution;