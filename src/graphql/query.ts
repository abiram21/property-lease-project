import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import GraphQLProperty from "../modules/property/graphql/types/property";
import propertyResolver from "../modules/property/graphql/resolvers/property";
const query = new GraphQLObjectType({
    name: "query",
    fields: () => ({
        properties: {
            type: new GraphQLNonNull(GraphQLList(GraphQLProperty)),
            resolve:  propertyResolver,
        }
    }),
})

export default query;