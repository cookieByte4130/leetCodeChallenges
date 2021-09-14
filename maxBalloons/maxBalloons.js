/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3973/

Maximum Number of Balloons

Given a string text, you want to use the characters of text to form as many
instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of
instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
*/

const maxBalloons = (text) => {
  let charSet = {};
  const target = "balloon";
  for (let i = 0; i < target.length; i++) {
    const ch = target.charAt(i);
    if (ch === -1) {
      return 0;
    }
    if (!charSet[ch]) {
      charSet[ch] = {
        numOfTargetInstances: 1,
        numOfTextInstances: 0
      }
    } else {
      charSet[ch].numOfTargetInstances += 1;
    }
  }
  for (let i = 0; i < text.length; i++) {
    const ch = text.charAt(i);
    if (charSet[ch]) {
      charSet[ch].numOfTextInstances++;
    }
  }
  let maxNum;
  let chars = Object.keys(charSet);
  for (let ch of chars) {
    let n = Math.floor(charSet[ch].numOfTextInstances / charSet[ch].numOfTargetInstances);
    if (n < 1) {
      maxNum = 0;
      return 0;
    } else {
      if (!maxNum || n < maxNum) {
        maxNum = n;
      }
    }
  };
  return maxNum;
}

module.exports = maxBalloons;
