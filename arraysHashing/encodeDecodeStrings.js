class Solution
{
	// converts all of array strings into one string
	// encoded with length of string + # + actual string
	encode(strs)
	{
		// init empty result string
		let result = ""

		// for each string, compute its length
		// append length#string
		for(let i = 0; i < strs.length; i++)
		{
			result += strs[i].length + "#" + strs[i]
		}

		// return final encoded string
		return result

	}

	decode(str)
	{

	}
}

let dummy_input = ["Hello", "World"]
const caller = new Solution()


caller.encode(dummy_input)
