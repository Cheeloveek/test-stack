import express from 'express';

let app = express()

function calculate(a, op, b) {
	switch (op) {
		case 'add':
			return a + b;
		case 'sub':
			return a - b;
		default:
			throw Error('Invalid op');
	}
}

app.use(express.json());

app.post('/calc', (req, res) => {
	console.log(req.body)
	let result = calculate(req.body.a, req.body.op, req.body.b);
	res.json(result);
});

app.use(express.static('static'));

app.listen(8080);
console.log('App running on http://127.0.0.1:8080/')