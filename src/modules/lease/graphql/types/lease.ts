import { GraphQLFloat } from "graphql";

import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import GraphQLProperty from "../../../property/graphql/types/property";

const GraphQLLease = new GraphQLObjectType({
  name: "Lease",
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
        type: new GraphQLNonNull(GraphQLFloat),
        description: "Amount of the lease",
    },
  },
});

export default GraphQLLease