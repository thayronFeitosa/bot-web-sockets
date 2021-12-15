import express, { Request, Response } from 'express';

const app = express();


app.get('/', (request: Request, response: Response) => {
    return response.json({
        message: 'Welcome'
    });
});

app.listen(3000, () => console.log('Serviador rodando na porta 3333'));
