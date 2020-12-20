# Hy-Profile

Hy-Profile (HyP) is a simple NPM module made to make accessing the Hypixel API much more streamlined in JS. This is mostly for a fun project, and **not** for any professional use. There are many planned features for this, but it really doesn't do much right now.  

On top of Hypixel API implementation, this also contains many other misc functions meant for accessing various other Minecraft related APIs to help with building other projects using this.

## Why?

I originally decided to create this as I wanted to make a Discord bot using [Discord.JS](https://discord.js.org) that would add commands related to the Hypixel API, specifically for SkyBlock.

## Credits

This project relies entirely on the [Hypixel API](https://api.hypixel.net), as well as a few other libraries and APIs:

- [Hypixel API](https://api.hypixel.net)
- [Cafatar API](https://crafatar.com)
- [got Library](https://github.com/sindresorhus/got) (as well as its dependencies)
- [Mojang API](https://wiki.vg/Mojang_API)

## Documentation

> ANY API KEYS BELOW ARE EXAMPLES, AND NOT REAL KEYS.  
> DO NOT SHARE YOUR API KEY WITH ANYONE

### **getId( user )**  

Gets the uuid of a user.  
Returns a promise which returns a JSON array.

### Example

```js
const hyp = require('hy-profile')

hyp.getId('Klepti').then(console.log)
//prints the uuid of user Klepti
```

### **getProfiles( uuid, api-key )**  

Gets the SkyBlock profiles of a user.  
Returns a promise which returns a JSON array.  

### Example

```js
const hyp = require('hy-profile')

hyp.getProfiles('b0464b4e-c28d-48f6-9834-08ff000236f4', '5bf56ad7-1838-091b-a174-5ce065b55c74').then(console.log)
//prints a json object containing all profiles under a user
```

### **getBalance( profile-id, api-key )**  

Gets the balance of a profile.  
Returns a promise which returns a JSON array.

### Example

```js
const hyp = require('hy-profile')

hyp.getBalance('58342f275e7b442abe6ce94cbfb47dc9', '5bf56ad7-1838-091b-a174-5ce065b55c74').then(console.log)
//prints the balance found under the profile id, will not work if the banking API is not enabled on the profile
```

### **getSkin( uuid )**  

Gets the skin of a user.  
Returns a string which contains an image url.

### Example

```js
const hyp = require('hy-profile')

hyp.getSkin('b0464b4e-c28d-48f6-9834-08ff000236f4').then(console.log)
//prints an image url containing the user's skin
```
