window.onload = function () {
	var buttonHandle = document.getElementById('handle-click');
	buttonHandle.onclick = function () {
		document.getElementById('sec-main').classList.add('active');
		document.getElementById('sec-firework').classList.add('active');
		setTimeout(function () {
			document.getElementById('sec-message').classList.add('active');
			// document.getElementById('sec-firework').classList.remove('active');
		}, 5000);
	}
}