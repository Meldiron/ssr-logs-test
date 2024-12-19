/** @type {import('./$types').PageLoad} */
import * as fs from "fs";

let i = 0;

export function load() {
	let y;

	if (!fs.existsSync("/tmp/l.txt")) {
		y = 0;
	} else {
		y = parseInt(fs.readFileSync("/tmp/l.txt").toString());
	}

	i++;
	y++;

	console.log("A log printed " + i + " times and " + y + " global times " + Date.now());

	fs.writeFileSync("/tmp/l.txt", y.toString());

	return {
		msg: "All logs printed"
	};
}
