const resolvers = {
  Query: {
      cat: (_, {p1}) => {
        console.log(p1);
        return {
          subCat1: () => {
            return {
              id: 'id1',
              title: 'Test ' + p1 
            }
          } 
        };
      }
  } 
};
module.exports = resolvers;

