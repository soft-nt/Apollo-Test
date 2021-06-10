const resolvers = {
  Query: {
      // returns an array of Tracks that will be used to populate
      // the homepage grid of our web client
      tracksForHome: async (_, __, {dataSources}) => {
        const tracks = await dataSources.trackAPI.getTracksForHome();
        
        // Add a field to the result
        tracks.map(track => {
          track.titleUpdated = "Updated - " + track.title;
        });

        return tracks;
      }
  },
  Track: {
    author: (_, __, {dataSources}) => {
      const authorId = _.authorId;
      return  dataSources.trackAPI.getAuthor(authorId);
    }
  }
};
module.exports = resolvers;

