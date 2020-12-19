const https = require("https")

function getID(user, _callback) {
    https.get(`https://api.mojang.com/users/profiles/minecraft/${user}?at=${Math.floor(Date.now() / 1000)}`, (response) => {
        let result = ''
        response.on('data', (data) => {
            result += data
        })

        response.on('end', () => {
            _callback(JSON.parse(result).id)
        })
    })
}

exports.getProfiles = function getProfiles(user, apiKey) {
    getID(user, (uuid) => {
        console.log(uuid)
        https.get(`https://api.hypixel.net/player?key=${apiKey}&uuid=${uuid}`, (response) => {
            let result = ''
            response.on('data', (data) => {
                result += data
            })

            response.on('end', () => {
                var profiles = JSON.parse(result).player.stats.SkyBlock.profiles

                console.log(`${user}'s Profiles:`)
                Object.keys(profiles).forEach((key) => {
                    console.log(profiles[key].cute_name)
                })
            })
        })
    })
}