/**
 * Put `.htmllintrc` config file into project root after package install.
 */

const path     = require('path'),
	fs         = require('fs'),
	cwd        = process.cwd(),
	splitedCwd = cwd.split(path.sep),
	config     = require('./index');

let projectRoot    = '',
	htmllintrcPath = '';

splitedCwd.some((part) => {

	if (part == 'node_modules') {
		return true;
	}

	projectRoot += part + path.sep;

	return false;
});

htmllintrcPath = path.join(projectRoot, '.htmllintrc');

fs.writeFileSync(
	htmllintrcPath,
	JSON.stringify(config, null, '  '),
	'utf8'
);

console.log('.htmllintrc ->', htmllintrcPath, '\n');
