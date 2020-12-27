declare namespace findWith {
	/**
	A predicate that is provided with each item in the array.

	@param item The item in the array.
	@param index The index of the item in the array.
	@param array The array.

	@returns The value for the provided item.
	*/
	type Predicate<ArrayValueType> = (item: ArrayValueType, index: number) => number
}

declare const findWith: {
	/**
	Find the items in an array with the highest computed values.

	@param array The array to find the items from.

	@example
	```
	const findWith = require("find-with")

	findWith.multiple(["a", "abc", "abc", "ab"], item => item.length)
	//=> ["abc", "abc"]
	```
	*/
	multiple: <ArrayValueType>(array: readonly ArrayValueType[], predicate: Predicate<ArrayValueType>) => ArrayValueType[]

	/**
	Find the item in an array with the highest computed value.

	@param array The array to find the item from.

	@example
	```
	const findWith = require("find-with")

	findWith(["a", "abc", "ab"], item => item.length)
	//=> "abc"
	```
	*/
	<ArrayValueType>(array: readonly ArrayValueType[], predicate: findWith.Predicate<ArrayValueType>): ArrayValueType
}

export = findWith
