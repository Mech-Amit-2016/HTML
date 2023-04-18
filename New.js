// // const add = (a,b) => {
// //     return a+b
// }
// console.log(add(2,5))

// 
{/* <script> */}
	// API for get requests
	let fetchRes = fetch(
	"https://jsonplaceholder.typicode.com/todos/1");
	// fetchRes is the promise to resolve
	// it by using.then() method
	fetchRes.then(res =>
		res.json()).then(d => {
			console.log(d)
		})
// </script>
