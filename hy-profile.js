const got = require('got');

exports.getID = async function getID(user) {
  try {
    const response = await got(`https://api.mojang.com/users/profiles/minecraft/${user}?at=${Math.floor(Date.now() / 1000)}`);
    return JSON.parse(response.body).id
  } catch (error) {
    console.log(error);
  }
}

exports.getProfiles = async function getProfiles(uuid, apiKey) {
  try {
    const response = await got(`https://api.hypixel.net/player?key=${apiKey}&uuid=${uuid}`);
    return JSON.parse(response.body).player.stats.SkyBlock.profiles
  } catch (error) {
    console.log(error);
  }
}

exports.getBalance = async function getBalance(profile, apiKey) {
  try {
    const response = await got(`https://api.hypixel.net/skyblock/profile?key=${apiKey}&profile=${profile}`);
    return JSON.parse(response.body).profile.banking.balance
  } catch (error) {
    console.log(error);
  }
}

exports.getSkin = async function getSkin(uuid) {
  try {
    return `https://crafatar.com/renders/body/${uuid}.png?overlay`
  } catch (error) {
    console.log(error);
  }
}