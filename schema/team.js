export default `
type Team{
    owner:User!
    channels: [Channel!]!
    members:[User!]!
}

type Mutation {
    createTeam(name: String!):Boolean!
}
`;