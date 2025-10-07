function countPositive(nums) {

    let count = 0;


    nums.forEach((element) => {
        if (element > 0) {
            count++;
        }

    });

    return count;
}
nums1 = [1, -3, 5];
console.log(countPositive(nums1));
nums = [-2, 3, -5, 7, 10];
console.log(countPositive(nums));