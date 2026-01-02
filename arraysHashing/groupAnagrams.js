let strs = ["act", "pots", "tops", "cat", "stop", "hat"]
let res = {} //maps character count of each string to list of anagrams

for(let s of strs)
{
	const count = new Array(26).fill(0) // a ... z

	for(let c of s)
	{
		count[c.charCodeAt(0) - 'a'.charCodeAt(0)] +=1 // counts frequency of each character
	}

	const key = count.join(',') // convert frequency array into a hashable key

	// insert into map
	if(!res[key])
	{
		// if signature hasnt' been seen, create an empty list
		// add the word to the list
		res[key] = []
	}

	res[key].push(s)

}

console.log(Object.values(res))
