"use strict"

module.exports = (array, predicate) => {
	let bestValue
	let bestItem

	for (const [index, item] of array.entries()) {
		const value = predicate(item, index, array)

		if (bestValue === undefined || value > bestValue) {
			bestValue = value
			bestItem = item
		}
	}

	return bestItem
}

module.exports.multiple = (array, predicate) => {
	const values = array.map((item, index) => [index, predicate(item, index, array)])
	const bestValue = Math.max(...values.map(([_, value]) => value))

	return values.filter(([_, value]) => value === bestValue).map(([index]) => array[index])
}
