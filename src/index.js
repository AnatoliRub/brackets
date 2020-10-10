module.exports = function check(str, bracketsConfig) {
	let stack = []
	let bracket = str.split('')
	let bracketsPairs = new Object()

	for (let i = 0; i < bracketsConfig.length; i++) {
		bracketsPairs[`${bracketsConfig[i][0]}`] = `${bracketsConfig[i][1]}`
	}

	for (let i = 0; i < bracket.length; i++) {
		let checkBracket = true
		if (stack.length > 0) {
			for (const key in bracketsPairs) {
				if ((stack[stack.length - 1] == key) && (bracketsPairs[key] == bracket[i])) {
					stack.pop()
					checkBracket = false
				}
			}
			if (checkBracket) {
				stack.push(bracket[i])
			}
		} else {
			stack.push(bracket[i])
		}
	}
	return stack.length == 0
}
