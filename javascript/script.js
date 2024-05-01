function summary(arr) {
    const uniqueArr = [...new Set(arr)];
    let even = 0;
    let odd = 0;
    for (let i = 0; i < uniqueArr.length; i++) {
      const element = uniqueArr[i];
      if (typeof element !== "number") {
        throw Error(`${uniqueArr[i]} is not a number`);
      }
      if (element % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
    return { even, odd, total: arr.length };
  }
  console.log(summary([6, 3, 3, 4, 13, 6, 7, 18, 7, 11]));
  