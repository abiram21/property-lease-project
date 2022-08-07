import { GraphQLFloat, GraphQLList } from "graphql";
import GraphQLLease from "../../../lease/graphql/types/lease";

import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";

const GraphQLProperty = new GraphQLObjectType({
  name: "Property",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Property id",
    },
    address: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Address of the property",
    },
    owner: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Owner of the property",
    },
    leases: {
      type: new GraphQLList(GraphQLLease),
      description: "Leases of the property",
    },
    status: {
      // to be change to enum value
      type: new GraphQLNonNull(GraphQLFloat),
      description: "Status of the property",
    },
    description: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "Description of the property",
    },
  }),
});

export default GraphQLProperty;
