export default {
    // Query: {
    //     getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
    //     allUsers: (parent, args, { models }) => models.User.findAll(),
    // },
    Mutation: {
        createChannel: async (parent, args, { models }) => {
            try {
                await models.Channel.create(args);
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }

        },
    }
};