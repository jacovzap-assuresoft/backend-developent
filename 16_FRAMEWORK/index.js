const Koa = require('koa');
const Router = require('koa-router');
const { koaBody } = require('koa-body');

const app = new Koa();
const router = new Router();

// Middleware to parse request body as JSON
app.use(koaBody());

// In-memory array to store users
const users = [
    { id: 1, name: 'Juan Pablo' },
    { id: 2, name: 'Juan Josue' },
];

// Middleware for error handling
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.status = error.status || 500;
        ctx.body = { error: error.message };
    }
});

// Routes
router.get('/users', async (ctx) => {
    ctx.body = users;
});

router.get('/users/:id', async (ctx) => {
    const userId = parseInt(ctx.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        ctx.throw(404, 'User not found');
    }

    ctx.body = user;
});

router.post('/users', async (ctx) => {
    const newUser = ctx.request.body;
    newUser.id = users.length + 1;
    users.push(newUser);

    ctx.status = 201;  // Created
    ctx.body = newUser;
});

router.put('/users/:id', async (ctx) => {
    const userId = parseInt(ctx.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        ctx.throw(404, 'User not found');
    }

    users[userIndex] = { ...users[userIndex], ...ctx.request.body };

    ctx.body = users[userIndex];
});

router.del('/users/:id', async (ctx) => {
    const userId = parseInt(ctx.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        ctx.throw(404, 'User not found');
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    ctx.body = deletedUser;
});

// Use routes
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});