import { GraphQLObjectType, GraphQLString } from "graphql";
const query = new GraphQLObjectType({
    name: "query",
    fields: () => ({
        sample: {
            type: GraphQLString,
            resolve: ()=>{
                console.log("hidsdfdf");
                
                return "HI";
            }
        }
    }),
})

export default query;