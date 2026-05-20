class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
  productExceptSelf = function (nums) {
  let result = [];
  let product = 1;
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product = product * nums[j];
      }
      if (j === nums.length - 1) {
        result.push(product);
        product = 1;
      }
    }
  }
  return result;
};
}
