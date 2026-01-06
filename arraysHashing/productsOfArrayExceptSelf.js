let nums = [1, 2, 4, 6]

// length of input array
let n = nums.length

// create result output array with each initial value of one
let result = new Array(n).fill(1)

// go through every position in input array
for(let i = 1; i < n; i++)
{
	// for each position in output array 
	// take prefix and input into position
	// take input array value multiplied by prefix array value
	// store in result output array
	result[i] = result[i - 1] * nums[i - 1]
}

// init end of array position
let postFix = 1

// starts at end of array
for(let i = n - 1; i >= 0; i--)
{
	// multiple postfix value by prefix value
	result[i] *= postFix

	// update postfix from input array nums
	postFix *= nums[i]
}

console.log(result)
