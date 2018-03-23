import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
// ./graphql/typeDefs.js
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')), { all: true });
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const myGraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const PORT = 8081;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: myGraphQLSchema, context: {
        models,
        user: {
            id: 1,
        },
    }
}));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

models
    .sequelize
    .sync()
    .then(() => {
        app.listen(PORT);
    });

