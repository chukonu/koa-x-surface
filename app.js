var koa = require('koa');
var surface = require('surface');

var app = koa();

surface(app);

app.listen(3000, 'localhost', function () {
	console.log('Server listening on ', this.address());
});
