export default `
type Team{
    owner:User!
    channels: [Channel!]!
    members:[User!]!
}

type Channel{
    id:Int!
    name: String!
    message:[Message!]!
    public: Boolean!
    users:[User!]!
}

type Message{
    id:Int!
    text: String!
    user:User!
    channel:Channel!
}

type User{
    id:Int!
    username: String!
    email:String!
    team:[Team!]!
}

type Query {
    hi:String
}
`;