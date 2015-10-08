'use strict'

import ASQ from 'asynquence';
import fs from 'fs';

console.log(__filename);

ASQ('read-file')
	.then(done => {
		let chunks = [], bufferLength = 0;
		fs.createReadStream(__filename)
			.on('data', chunk => {
				chunks.push(chunk);
				bufferLength += chunk.length;
			})
			.on('end', () => {
				done(Buffer.concat(chunks, bufferLength));
			})
	})
	.then((done, buffer) => {
		console.log(buffer.toString());
	});

