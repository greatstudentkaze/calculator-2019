let flagDot = false,
    leftBracketCount=0,
    rightBracketCount=0;

function addX(x) {
    const answerStr = document.getElementById('input4c'),
        lastElem = answerStr.value.slice(-1);

    if (lastElem !== ')') {
        if (!(lastElem === "." && x === ".") & !(lastElem === '/' && x === 0)){
            if (x === ".") {
                if (flagDot === false) {
                    answerStr.value += x;
                    flagDot = true;
                }
            } else {
                answerStr.value += x;
            }
        }
    }
}

function addOperation(x) {
    const answerStr = document.getElementById('input4c'),
        lastElem = answerStr.value.slice(-1);

    if (!(lastElem === '+' || lastElem === '-'
        || lastElem === '*' || lastElem === '/' || lastElem === '.' || lastElem === '')) {
        answerStr.value += x;
        flagDot = false;
    }
}

function addBracket(side='l') {
    const answerStr = document.getElementById('input4c'),
        lastElem = answerStr.value.slice(-1);

    if (side === 'r' && leftBracketCount > rightBracketCount  && (lastElem !== '(' || lastElem !== '.')) {
        rightBracketCount += 1;
        answerStr.value += ')'
    }
    if (side === 'l' && (lastElem === '' || lastElem === '+' || lastElem === '-'
        || lastElem === '*' || lastElem === '/') ) {
        leftBracketCount += 1;
        answerStr.value += '(';
    }
}

function answer() {
    const answerStr = document.getElementById('input4c');

    if (answerStr.value)
        answerStr.value = eval(answerStr.value);
}

function clearAll() {
    const answerStr = document.getElementById('input4c');

    answerStr.value = '';
    flagDot = false;
}

function clearEntry() {
    const answerStr = document.getElementById('input4c'),
        lastElem = answerStr.value.slice(-1);

    if (lastElem === '.') {
        flagDot = false;
    }
    answerStr.value = answerStr.value.slice(0,-1);
}