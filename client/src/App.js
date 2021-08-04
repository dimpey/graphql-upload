import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Uploader } from "./components/Uploader";
import { createUploadLink } from 'apollo-upload-client';

const client = new ApolloClient({
  link: createUploadLink({ uri: "/graphql" }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Uploader />
    </ApolloProvider>
  );
}

export default App;
