export default {
    // Query: {
    //     getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
    //     allUsers: (parent, args, { models }) => models.User.findAll(),
    // },
    Mutation: {
        createMessage: async (parent, args, { models, user }) => {
            try {
                await models.Message.create({ ...args, userId: user.id });
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }

        },
    }
};