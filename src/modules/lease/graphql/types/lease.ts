import { GraphQLFloat } from "graphql";

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

const GraphQLLease = new GraphQLObjectType({
  name: "Lease ds",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "type id",
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLString),
      description: "type name",
    },
    endDate: {
        type: new GraphQLNonNull(GraphQLString),
        description: "type code",
    },
    frequency: {
        type: new GraphQLNonNull(GraphQLString),
        description: "Address of the student",
    },
    amount: {
        type: new GraphQLNonNull(GraphQLFloat)
    }
  },
});

export default GraphQLLease
