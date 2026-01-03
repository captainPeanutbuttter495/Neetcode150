let nums = [1, 2, 2, 2, 3, 3, 3]
let k = 2
let count = {} // counts occurences of each value

const freq = Array.from({ length: nums.length + 1}, () => []); // same size of input array, list of values that occurs n many times

// counts the occurrences of each values
for(const n of nums)
{
	count[n] = (count[n] || 0) + 1
}

// go through each value counted
for(const n in count)
{
	// value of n occurse x number of times
	// append value n into   
	freq[count[n]].push(parseInt(n))	
}

const res = [] 

// result output created
// iterate array frequency in decending order
for(let i = freq.length - 1; i > 0; i--)
{
	// go through every value in frequences at index i
	for(const n of freq[i])
	{
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
