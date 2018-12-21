#!/usr/bin/env node

const asciify = require('asciify-image');
const chalk = require('chalk');
const Table = require('cli-table3');
const path = require('path');

// Info
const data = {
	name: chalk.white.bold('Vladimir Bozhinovski'),
	bio: chalk.white.bold('Software Engineer'),
	work: chalk.white('Software Engineer - Musala Soft'),
	twitter: chalk.cyan('https://twitter.com/IamBozhinovski'),
	github: chalk.cyan('https://github.com/VladBozhinovski'),
	linkedin: chalk.cyan('https://www.linkedin.com/in/bozhinovski'),
	npx: chalk.white('npx bozhinovski'),
	labelWork: chalk.white.bold('      Work:'),
	labelTwitter: chalk.white.bold('   Twitter:'),
	labelGitHub: chalk.white.bold('    GitHub:'),
	labelLinkedIn: chalk.white.bold('  LinkedIn:'),
};

const table = new Table();
const newline = '\n';
const heading = `${data.name}`;
const bio = `${data.bio}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;

const getAvatar = async () => {
	const image = path.join(__dirname, '..', 'assets', 'avatar.jpg');
	let img;
	try {
		img = await asciify(image, {
			fit: 'box',
			width: '30%',
		});
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}

	return img;
};

async function getOutput() {
	const avatar = await getAvatar();
	const output =
		newline +
		newline +
		heading +
		newline +
		bio +
		newline.repeat(2) +
		working +
		newline +
		twittering +
		newline +
		githubing +
		newline +
		newline +
		linkedining +
		newline +
		newline;

	table.push([avatar, { content: output, vAlign: 'center' }]);

	console.log(table.toString());
}

getOutput();
