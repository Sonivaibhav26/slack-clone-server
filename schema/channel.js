export default `

type Channel{
    id:Int!
    name: String!
    message:[Message!]!
    public: Boolean!
    users:[User!]!
}
type Mutation {
    createChannel(name: String!,teamId: Int!,public:Boolean=false):Boolean!
}
`;