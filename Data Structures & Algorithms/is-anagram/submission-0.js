class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const ss=s.split("").sort().join("")
        const st=t.split("").sort().join("")
        return ss===st?true:false;
    }
}
