import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://fyb-cms.herokuapp.com/graphql',
	cache: new InMemoryCache(),
});
