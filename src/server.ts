import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    return response.json({ status: 'ok' })
});

app.listen(3333);