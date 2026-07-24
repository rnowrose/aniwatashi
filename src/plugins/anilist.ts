import { GraphQLClient } from 'graphql-request'

export const anilistClient = new GraphQLClient('https://graphql.anilist.co', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})
