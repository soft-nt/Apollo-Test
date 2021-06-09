const resolvers = {
  Query: {
      test: (_, {p1}) => {
        return {
          id: 1,
          title: "title " + p1
        };
      }
  }
};
module.exports = resolvers;

