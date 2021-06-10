const getData = (p1) => {
  return {
    id: "id1",
    title: "Test " + p1,
  };
};

const resolvers = {
  Query: {
    cat: (_, { p1 }) => {
      return {
        subCat1: () => {
          return getData(p1);
        },
        subCat2: (p1) => {
          return getData(p1);
        }
      };
    },
  },
};
module.exports = resolvers;
