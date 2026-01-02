let nums = [3, 4, 5, 6]
let target = 7
let array = []

let hashMap = new Map()
console.log("Target: " + target)
console.log("\nArray: " + nums)

for(let i = 0; i < nums.length; i++)
{
	let difference = target - nums[i]
	console.log("\nCurrent difference is: " + difference)
	
	if(hashMap.has(difference))
	{
		console.log("\nNumber found: " + difference)
		console.log("\nFound with element: " + i)
		let j = hashMap.get(difference)
		console.log("Answer: " + j)
		console.log("Answer: " + i)
		array.push(j)
		array.push(i)
	}

	else
	{
		hashMap.set(nums[i], i)
		console.log("\nInputting: " + nums[i])
	}
}

console.log(hashMap)
console.log(array)
