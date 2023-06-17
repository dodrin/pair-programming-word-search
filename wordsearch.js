//Pair Programming Dariia & Rina

const wordSearch = (letters, word) => {
  let wordIsFound = false;

  if (letters.length > 0 && word.length > 0) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoinArray = [];

    const rowLength = letters.length;
    const colLength = letters[0].length;

    for (let i = 0; i < colLength; i++) {
      verticalJoinArray[i] = [];
      for (let k = 0; k < rowLength; k++) {
        verticalJoinArray[i].push(letters[k][i]);
      }
    }
    const verticalJoin = verticalJoinArray.map(ls => ls.join(''));
    const allLetters = horizontalJoin.concat(verticalJoin);

    for (let l of allLetters) {
      if (l.includes(word)) {
        return true;
      }
    }
  }

  return wordIsFound;
};

module.exports = wordSearch;