# Hy-Profile

## General Summary

Hy-Profile is a simple NPM module made to make accessing the Hypixel API much more streamlined in JS. This is mostly for a fun project, and **not** for any professional use. There are many planned features for this, but it really doesn't do much right now.

## How?

The general idea of Hy-Profile is to provide functions that will easily access parts of the Hypixel API by just passing in a couple arguments. All it does is make the HTTP requests and handle any JSON for you so you don't have to.

## Why?

I originally decided to create this as I wanted to make a Discord bot using [Discord.JS](https://discord.js.org) that would add commands related to the Hypixel API, specifically for SkyBlock.

## Documentation

> ANY API KEYS BELOW ARE EXAMPLES, AND NOT REAL KEYS.  
> DO NOT SHARE YOUR API KEY WITH ANYONE

### **getProfiles(user, api-key)**  

Gets the SkyBlock profiles of a user.  
Returns a promise which returns a JSON array.

### Example

```js
const hyp = require('hy-profile')

hyp.getProfiles('Klepti', '5bf56ad7-1838-091b-a174-5ce065b55c74').then(console.log)
```
