function opToString(op) {
	switch (op) {
		case 'add':
			return '+';
		case 'sub':
			return '-';
		default:
			throw new Error('Invalid op');
	}
}

theForm.onsubmit = async ev => {
	ev.preventDefault();

	// preparing request body
	const formdata = new FormData(theForm);
	const
		a = +formdata.get('a'),
		b = +formdata.get('b'),
		op = formdata.get('op');
	const body = { a, op, b };

	// fetching result
	const response = await fetch('/calc', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();

	expressionOutput.value = `${a} ${opToString(op)} ${b} = ${result}`;
	resultOutput.innerText = result;
};