//https://api.mojang.com/users/profiles/minecraft/${user}?at=${Math.floor(Date.now() / 1000)}
//https://api.hypixel.net/player?key=${apiKey}&uuid=${uuid}

const got = require('got');

const player = 'Klepti'
const key = "c0f4f74d-98f3-4e04-b04f-410b54b93d59"

exports.getID = async function getID(user) {
    try {
      const response = await got(`https://api.mojang.com/users/profiles/minecraft/${user}?at=${Math.floor(Date.now() / 1000)}`);
      return JSON.parse(response.body).id
    } catch (error) {
      console.log(error);
    }
}

exports.getProfiles = async function getProfiles(user, apiKey) {
    let uuid = await exports.getID(user)
    try {
      const response = await got(`https://api.hypixel.net/player?key=${apiKey}&uuid=${uuid}`);
      return JSON.parse(response.body).player.stats.SkyBlock.profiles
    } catch (error) {
      console.log(error);
    }
}