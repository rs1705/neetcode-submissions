class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (let s of strs) {
      result = result + s.length + "#" + s;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let pointer = 0;
    while (pointer < str.length) {
      let length = 0;
      while (str[pointer] !== "#") {
        length = length * 10 + Number(str[pointer]);
        pointer++;
      }
      pointer++;
      let word = str.substring(pointer, pointer + length);
      result.push(word);
      pointer = pointer + length;
    }
    return result;
  }
}


