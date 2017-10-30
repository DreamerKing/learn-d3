const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const mustache = require('mustache');
const static = require('koa-static');
const router = require('koa-router')();

app.use(static(__dirname + '/src/lib'));
app.use(static(__dirname + '/src/js'));

app.use(views(__dirname + '/src/view', {
	extension: 'mustache'
}));

router.get('/', d3)
	.get('/mustache', learnMustache)
	.get('/hello', hello)
	.get('/select', selectSet)
	.get('/bar', showBar)
	.get('/start', start);

app.use(router.routes());

function d3(ctx) {
	ctx.body = "D3";
};

async function hello(ctx) {
	await ctx.render("hello",{
		text: "Hello D3!"
	})
};

async function selectSet(ctx) {
	await ctx.render("select",{
		text: "Select Set"
	});
};

async function showBar(ctx) {
	await ctx.render("bar", {
		title: "draw bar chart"
	});
};

async function learnMustache (ctx) {
	await ctx.render('mustache', {
		title: "learn mustache",
		withTag: "<h2>King > </h2>",
		company: "<b>Github</b>",
		name: {
			first: "king",
			last: "Dreamer"
		},
		repo: [
			{
				name:"koa"
			},
			{
				name: "react"
			},
			{
				name: "angular2"
			}
		],
		noneRepos: [],
		showName: function() {
			return 'Show:' +this.name;
		},
		address: "浙江省杭州市西湖区",
		isArray: [5,2,3],
		isShow: false
	});
}

function start(ctx, next) {
	ctx.body = "Start";
};

app.listen(3000);
console.log("server is running at 3000");