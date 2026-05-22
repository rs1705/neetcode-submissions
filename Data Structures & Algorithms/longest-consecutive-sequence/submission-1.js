class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         if (nums.length === 0) return 0;

  const numSet = new Set();

  let longestStreak = 1;
  let currentStreak = 1;
  for (let n of nums) {
    numSet.add(n);
  }
  for (let n of numSet) {
    if (numSet.has(n - 1)) {
      continue;
    } else {
      while (numSet.has(n + 1)) {
        currentStreak++;
        n++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
      currentStreak = 1;
    }
  }
  return longestStreak;
    }
}
