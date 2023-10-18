export function shufflings(letter) {
  let letterArr = letter.split("");
  let shuffArr = [];

  for (let i = 0; i < letterArr.length; i++) {
    let keepString = letterArr[i];

    for (let x = 0; x < letterArr.length; x++) {
      if (i !== x) {
        keepString = keepString + letterArr[x];
      }
    }
    if (!shuffArr.includes(keepString)) {
      shuffArr.push(keepString);
    }
  }

  for (let i = letterArr.length - 1; i >= 0; i--) {
    let keepString = letterArr[i];

    for (let x = letterArr.length - 1; x >= 0; x--) {
      if (i !== x) {
        keepString = keepString + letterArr[x];
      }
    }

    if (!shuffArr.includes(keepString)) {
      shuffArr.push(keepString);
    }
  }

  return shuffArr;
}

export function findOddInt(arr) {
  const keepsState = arr
    .sort()
    .filter((item, idx) => arr.indexOf(item) === idx)
    .map((item) => ({
      name: item,
      count: 0,
    }));

  arr.forEach((item) =>
    keepsState.forEach((keep) => {
      if (item === keep.name) {
        keep.count++;
      }
    })
  );

  for (let i = 0; i < keepsState.length; i++) {
    const item = keepsState[i];
    if (item.count % 2 !== 0) {
      return item.name;
    }
  }
}

export function countSmileys(arr) {
  const eyes = [":", ";"];
  const noes = ["-", "~"];
  const mouth = [")", "D"];

  let count = 0;
  arr.forEach((item) => {
    const each = item.split("");
    if (each.length === 2) {
      if (eyes.includes(each[0]) && mouth.includes(each[1])) {
        count++;
      }
    } else {
      if (eyes.includes(each[0]) && noes.includes(each[1]) && mouth.includes(each[2])) {
        count++;
      }
    }
  });

  return count;
}
