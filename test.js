const test = require("ava")
const findWith = require(".")

test("main", t => {
	t.is(findWith(["a", "abc", "ab"], item => item.length), "abc")
	t.deepEqual(findWith.multiple(["a", "abc", "abc", "ab"], item => item.length), ["abc", "abc"])
})
