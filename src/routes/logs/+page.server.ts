/** @type {import('./$types').PageLoad} */

export function load() {
	let x = process.env.OLD

	return {
		msg: "Env: " + x
	};
}
