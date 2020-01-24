const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index(request, response) {
    const DevsResponse = await Dev.find();

    return response.json(DevsResponse);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    const dev = await Dev.find({ github_username });

    if (dev.length === 0) {
      try {
        const apiResponses = await axios.get(
          `https://api.github.com/users/${github_username}`
        );

        const { name = login, avatar_url, bio } = apiResponses.data;

        const techsArray = parseStringAsArray(techs);

        const location = {
          type: 'Point',
          coordinates: [longitude, latitude]
        };

        const dev = await Dev.create({
          name,
          github_username,
          bio,
          avatar_url,
          techs: techsArray,
          location
        });

        const sendSocketMessageTo = findConnections(
          { latitude, longitude },
          techsArray
        );

        sendMessage(sendSocketMessageTo, 'NewDev', dev);
        return response.json(dev);
      } catch (error) {
        return response.status(404).json({ Error: 'User not found' });
      }
    } else {
      return response.json({ Error: 'User already exist' });
    }
  }
};
