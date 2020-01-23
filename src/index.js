
const { ApolloServer, gql } = require('apollo-server');
// const ConstraintDirective = require('graphql-constraint-directive')

const fs = require('fs')

const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const resolvers = {
  Query,
  Mutation
}


const server = new ApolloServer({  
    typeDefs: gql(`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`),
    // schemaDirectives: { constraint: ConstraintDirective },
    resolvers,
    context: request => {
    return {...request, prisma}
} });

module.exports = server;