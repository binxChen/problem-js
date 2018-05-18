/**
 * 给定一个整数数组nums,按要求返回一个新的counts数组，数组counts有该性质：
 * counts[i]的值是nums[i]右侧小于nums[i]的元素的数量
 *
 *例：  nums = [5,2,6,1]
 * counts=[2,1,1,0]
 * */

/**
 * 我们可以模拟一个栈。
 * 所以每遇到一个比栈顶元素大的数，就放进栈里，遇到比栈顶元素小的就二分查找前边的元素，找到一个“最应该被换掉的元素”，用新数去更新前边的元素。
 *
 */

(function () {
    const nums = [1,2,5,2,6,4,3,9];//[0,0,3,0,2,1,0,0]
    console.log(getNumbers(nums));
})();

function getNumbers(nums) {
    nums = nums.reverse();// 颠倒数组,从最右侧变为最左侧
    let newArr = [], numArr = [];
    let lengths = nums.length;
    newArr.push(nums[0]);
    numArr.push(0);
    for (let i = 1; i < lengths; i++) {
        newArr = binaryInsertSort([...newArr,nums[i]])
        numArr.push(newArr.indexOf(nums[i]))
    }
    numArr = numArr.reverse();
    return numArr
}
function binaryInsertSort(arr){//二分插入排序
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i], left = 0, right = i - 1;
        while (left <= right) {
            var middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (var j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    return arr;
}