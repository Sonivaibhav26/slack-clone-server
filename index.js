import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

import { makeExecutableSchema } from 'graphql-tools';

const myGraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
// const myGraphQLSchema = // ... define or import your schema here!
const PORT = 8081;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

models
    .sequelize
    .sync({ force: true })
    .then(() => {
        app.listen(PORT);
    });

