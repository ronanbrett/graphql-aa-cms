import { buildSchema, GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import query from './base.gql';


// export const schema = buildSchema(query);

export const QueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'The root of all... queries',
	fields: () => ({
		hello2: {
			type: GraphQLString,
			resolve: () =>  'Hello World3'
		}
	})
})

export const schema = new GraphQLSchema({
  query: QueryType,
});