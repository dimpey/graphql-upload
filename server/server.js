const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
