export default {
    // Query: {
    //     getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
    //     allUsers: (parent, args, { models }) => models.User.findAll(),
    // },
    Mutation: {
        createTeam: async (parent, args, { models, user }) => {
            try {
                await models.Team.create({ ...args, owner: user.id });
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }

        },
    }
};