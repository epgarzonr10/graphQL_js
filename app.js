const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { userSchema } = require('./schemas/userSchema');
const { userResolvers } = require('./resolvers/userResolver');
const app = express();
const port = 4000;

const server = new ApolloServer({
  typeDefs: userSchema,  
  resolvers: userResolvers  
});

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}${server.graphqlPath}`)
  );
}

startServer();
