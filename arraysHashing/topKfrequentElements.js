let nums = [1, 2, 2, 2, 3, 3, 3]
let k = 3
let count = {} // counts occurences of each value

const freq = Array.from({ length: nums.length + 1}, () => []); // same size of input array, list of values that occurs n many times

// counts the occurrences of each values
for(const n of nums)
{
	console.log("n: " + n)
	count[n] = (count[n] || 0) + 1
	console.log("Current Count: " + count[n])
}

console.log("Count: " + Object.values(count))
console.log("Frequency: " + freq)

// go through each value counted
// "bucket sorting" occurs
for(const n in count)
{
	// value of n occurse x number of times
	// append value n into frequency array
	freq[count[n]].push(parseInt(n))	
	console.log("Current value pushed: " + freq[count[n]])
	console.log("Current array: " + freq)
}

const res = [] 

// result output created
// iterate array frequency in decending order
for(let i = freq.length - 1; i > 0; i--)
{
	// go through every value in frequences at index i
	for(const n of freq[i])
	{
		console.log("\nCurrent array: " + freq[i])
		// if not empty, append value
		res.push(n)


		// stop when result output length is the same of k
		if(res.length === k)
		{
			console.log(res)
			return
		}
	}
}
