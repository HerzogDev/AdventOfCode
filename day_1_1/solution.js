const fs = require('fs/promises');

let leftList = [];
let rightList = [];
let sum = 0;

async function solution() {
    try {
        const data = await fs.readFile('./day_1_1/input.txt');
        const content = data.toString();
        const lines = content.split('\n');

        for (let line of lines) {
            const lineContent = line.split('   ');
            leftList.push(parseInt(lineContent[0]));
            rightList.push(parseInt(lineContent[1]));
        }

        leftList.sort();
        rightList.sort();

        for (let i = 0; i < leftList.length; i++) {
            sum += getDistance(leftList[i], rightList[i]);
        }

        console.log(sum);

    } catch (err) {
        console.error('Fehler beim Lesen der Datei:', err);
    }
}

function getDistance(left, right) {
    if(left > right) {
        return left - right;
    }
    else if(left < right) {
        return right - left;
    }
    else{
        return 0;
    }
}
module.exports = solution;