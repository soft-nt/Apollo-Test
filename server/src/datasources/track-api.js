const {RESTDataSource} = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
      }

      async getTracksForHome() {
        return this.get('tracks');
      }

      async getAuthor(authorId) {
        return this.get(`author/${authorId}`);
      } 
  }
  module.exports = TrackAPI;