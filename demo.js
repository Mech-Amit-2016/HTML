function demo() {
	console.log("Function called!!")
	return Promise.resolve(1);
	// or
	// return Promise.reject("Failure");
}
demo().then(
	(value) => {
		console.log(value);
	return ++value;
	},
	(message) => {
		console.log(message);
	}
	).then(
	(value) => {
		console.log(value);
	},
	(message) => {
		console.log(message);
	}
)
