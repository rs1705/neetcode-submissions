class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
   productExceptSelf = function (nums) {
      let result = new Array(nums.length).fill(1);

   for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix = suffix * nums[i + 1];
    result[i] = result[i] * suffix;
    
  }

  return result;
}
}
