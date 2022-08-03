//var fetch = require('node-fetch');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getColors() {
    const response = await fetch("https://api.sherwin-williams.com/prism/v1/colors/sherwin?lng=en-US&_corev=2.1.2", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "sec-gpc": "1",
            "Referer": "https://www.sherwin-williams.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });

    let data = await response.json()
    data = removeDuplicates(data.sort(rankingSorter("storeStripLocator", "colorNumber")))
    return data
}


var approved = [
    {
        "Strip #": 221,
        "SW Paint #": 9136,
        "Color Name": "Lullaby",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 221,
        "SW Paint #": 9137,
        "Color Name": "Niebla Azul",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 221,
        "SW Paint #": 9138,
        "Color Name": "Stardew",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 221,
        "SW Paint #": 9139,
        "Color Name": "Debonair",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 173,
        "SW Paint #": 9054,
        "Color Name": "Little Boy Blu",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 173,
        "SW Paint #": 9055,
        "Color Name": "Billowy Breeze",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 173,
        "SW Paint #": 9056,
        "Color Name": "French Moire",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 173,
        "SW Paint #": 9057,
        "Color Name": "Aquitaine",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 173,
        "SW Paint #": 9058,
        "Color Name": "Secret Cove",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 174,
        "SW Paint #": 6498,
        "Color Name": "Byte Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 174,
        "SW Paint #": 6499,
        "Color Name": "Stream",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 174,
        "SW Paint #": 9061,
        "Color Name": "Rest Assured",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 174,
        "SW Paint #": 6500,
        "Color Name": "Open Seas",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 174,
        "SW Paint #": 6501,
        "Color Name": "Manitou Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 184,
        "SW Paint #": 6512,
        "Color Name": "Balmy",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 184,
        "SW Paint #": 6513,
        "Color Name": "Take Five",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 184,
        "SW Paint #": 6514,
        "Color Name": "Respite",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 184,
        "SW Paint #": 9070,
        "Color Name": "Baby Blue Eyes",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 184,
        "SW Paint #": 6515,
        "Color Name": "Leisure Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 185,
        "SW Paint #": 6519,
        "Color Name": "Hinting Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 185,
        "SW Paint #": 6520,
        "Color Name": "Honest Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 185,
        "SW Paint #": 6521,
        "Color Name": "Notable Hue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 185,
        "SW Paint #": 9071,
        "Color Name": "Dyer's Woad",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 185,
        "SW Paint #": 6522,
        "Color Name": "Sporty Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 224,
        "SW Paint #": 6239,
        "Color Name": "Upward",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 224,
        "SW Paint #": 6240,
        "Color Name": "Windy Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 224,
        "SW Paint #": 6241,
        "Color Name": "Aleutian",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 224,
        "SW Paint #": 9151,
        "Color Name": "Daphne",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 224,
        "SW Paint #": 6242,
        "Color Name": "Bracing Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 225,
        "SW Paint #": 6246,
        "Color Name": "North Star",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 225,
        "SW Paint #": 6247,
        "Color Name": "Krypton",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 225,
        "SW Paint #": 6248,
        "Color Name": "Jubilee",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 225,
        "SW Paint #": 9152,
        "Color Name": "Let it Rain",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 220,
        "SW Paint #": 6225,
        "Color Name": "Sleepy Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 220,
        "SW Paint #": 6226,
        "Color Name": "Languid Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 220,
        "SW Paint #": 6227,
        "Color Name": "Meditative",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 220,
        "SW Paint #": 9135,
        "Color Name": "Whirlpool",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 219,
        "SW Paint #": 6218,
        "Color Name": "Tradewind",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 219,
        "SW Paint #": 6219,
        "Color Name": "Rain",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 219,
        "SW Paint #": 6220,
        "Color Name": "Interesting\nAqua",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 219,
        "SW Paint #": 9134,
        "Color Name": "Delft",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 218,
        "SW Paint #": 6211,
        "Color Name": "Rainwashed",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 218,
        "SW Paint #": 6212,
        "Color Name": "Quietude",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 218,
        "SW Paint #": 6213,
        "Color Name": "Halcyon Green",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 218,
        "SW Paint #": 9133,
        "Color Name": "Jasper Stone",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 217,
        "SW Paint #": 6204,
        "Color Name": "Sea Salt",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 217,
        "SW Paint #": 6205,
        "Color Name": "Comfort Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 217,
        "SW Paint #": 6206,
        "Color Name": "Oyster Bay",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 217,
        "SW Paint #": 9132,
        "Color Name": "Acacia Haze",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 216,
        "SW Paint #": 6197,
        "Color Name": "Aloof Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 216,
        "SW Paint #": 6198,
        "Color Name": "Sensible Hue",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 216,
        "SW Paint #": 6199,
        "Color Name": "Rare Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 216,
        "SW Paint #": 9131,
        "Color Name": "Cornwall Slate",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 215,
        "SW Paint #": 6183,
        "Color Name": "Conservative\nGray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 215,
        "SW Paint #": 6184,
        "Color Name": "Austere Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 215,
        "SW Paint #": 6185,
        "Color Name": "Escape Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 215,
        "SW Paint #": 9130,
        "Color Name": "Evergreen Fog",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 214,
        "SW Paint #": 6190,
        "Color Name": "Filmy Green",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 214,
        "SW Paint #": 6191,
        "Color Name": "Contented",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 214,
        "SW Paint #": 6192,
        "Color Name": "Coastal Plain",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 214,
        "SW Paint #": 9129,
        "Color Name": "Jade Dragon",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 213,
        "SW Paint #": 6176,
        "Color Name": "Liveable Green",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 213,
        "SW Paint #": 6177,
        "Color Name": "Softened Green",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 213,
        "SW Paint #": 6178,
        "Color Name": "Clary Sage",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 213,
        "SW Paint #": 9128,
        "Color Name": "Green Onyx",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 212,
        "SW Paint #": 6162,
        "Color Name": "Ancient Marble",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 212,
        "SW Paint #": 6163,
        "Color Name": "Grassland",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 212,
        "SW Paint #": 6164,
        "Color Name": "Svelte Sage",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 212,
        "SW Paint #": 9127,
        "Color Name": "At Ease Soldier",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 212,
        "SW Paint #": 6165,
        "Color Name": "Connected\nGray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 211,
        "SW Paint #": 6169,
        "Color Name": "Sedate Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 211,
        "SW Paint #": 6170,
        "Color Name": "Techno Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 211,
        "SW Paint #": 6171,
        "Color Name": "Chatroom",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 211,
        "SW Paint #": 9126,
        "Color Name": "Honed\nSoapstone",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 298,
        "SW Paint #": 7738,
        "Color Name": "Cargo Pants",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 298,
        "SW Paint #": 7739,
        "Color Name": "Herbal Wash",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 298,
        "SW Paint #": 7748,
        "Color Name": "Green Earth",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 244,
        "SW Paint #": 7015,
        "Color Name": "Repose Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 244,
        "SW Paint #": 7016,
        "Color Name": "Mindful Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 244,
        "SW Paint #": 7017,
        "Color Name": "Dorian Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 244,
        "SW Paint #": 9170,
        "Color Name": "Acier",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 244,
        "SW Paint #": 7018,
        "Color Name": "Dovetail",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 282,
        "SW Paint #": 7667,
        "Color Name": "Zircon",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 282,
        "SW Paint #": 7672,
        "Color Name": "Knitting\nNeedles",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 282,
        "SW Paint #": 7668,
        "Color Name": "March Wind",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 282,
        "SW Paint #": 7673,
        "Color Name": "Pewter Cast",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 282,
        "SW Paint #": 7669,
        "Color Name": "Summit Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 235,
        "SW Paint #": 7071,
        "Color Name": "Gray Screen",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 235,
        "SW Paint #": 7072,
        "Color Name": "Online",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 235,
        "SW Paint #": 7073,
        "Color Name": "Network Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 235,
        "SW Paint #": 9162,
        "Color Name": "African Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 235,
        "SW Paint #": 7074,
        "Color Name": "Software",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 236,
        "SW Paint #": 7064,
        "Color Name": "Passive",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 236,
        "SW Paint #": 7065,
        "Color Name": "Argos",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 236,
        "SW Paint #": 7066,
        "Color Name": "Gray Matters",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 236,
        "SW Paint #": 9163,
        "Color Name": "Tin Lizzie",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 236,
        "SW Paint #": 7067,
        "Color Name": "Cityscape",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 237,
        "SW Paint #": 7057,
        "Color Name": "Silver Strand",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 237,
        "SW Paint #": 7058,
        "Color Name": "Magnetic Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 237,
        "SW Paint #": 7059,
        "Color Name": "Unusual Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 237,
        "SW Paint #": 9164,
        "Color Name": "Illusive Green",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 237,
        "SW Paint #": 7060,
        "Color Name": "Attitude Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 238,
        "SW Paint #": 9165,
        "Color Name": "Gossamer Veil",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 238,
        "SW Paint #": 9166,
        "Color Name": "Drift of Mist",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 238,
        "SW Paint #": 7658,
        "Color Name": "Gray Clouds",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 238,
        "SW Paint #": 7652,
        "Color Name": "Mineral Deposit",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 238,
        "SW Paint #": 7659,
        "Color Name": "Gris",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 239,
        "SW Paint #": 7653,
        "Color Name": "Silverpointe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 239,
        "SW Paint #": 7657,
        "Color Name": "Tinsmith",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 239,
        "SW Paint #": 7649,
        "Color Name": "Silverplate",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 239,
        "SW Paint #": 7650,
        "Color Name": "Ellie Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 239,
        "SW Paint #": 7655,
        "Color Name": "Stamped\nConcrete",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 159,
        "SW Paint #": 6456,
        "Color Name": "Slow Green",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 159,
        "SW Paint #": 6457,
        "Color Name": "Kind Green",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 159,
        "SW Paint #": 6458,
        "Color Name": "Restful",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 159,
        "SW Paint #": 9041,
        "Color Name": "Parisian Patina",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 169,
        "SW Paint #": 6470,
        "Color Name": "Waterscape",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 169,
        "SW Paint #": 6471,
        "Color Name": "Hazel",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 169,
        "SW Paint #": 9050,
        "Color Name": "Vintage Vessel",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 169,
        "SW Paint #": 6472,
        "Color Name": "Composed",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 169,
        "SW Paint #": 6473,
        "Color Name": "Surf Green",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 170,
        "SW Paint #": 6477,
        "Color Name": "Tidewater",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 170,
        "SW Paint #": 6478,
        "Color Name": "Watery",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 170,
        "SW Paint #": 9051,
        "Color Name": "Aquaverde",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 170,
        "SW Paint #": 6479,
        "Color Name": "Drizzle",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 142,
        "SW Paint #": 6393,
        "Color Name": "Convivial\nYellow",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 142,
        "SW Paint #": 6394,
        "Color Name": "Sequin",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 142,
        "SW Paint #": 9026,
        "Color Name": "Tarnished\nTrumpet",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 144,
        "SW Paint #": 6407,
        "Color Name": "Ancestral Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 144,
        "SW Paint #": 6408,
        "Color Name": "Wheat Grass",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 144,
        "SW Paint #": 9028,
        "Color Name": "Dusted Olive",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 297,
        "SW Paint #": 7736,
        "Color Name": "Garden Sage",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 297,
        "SW Paint #": 7734,
        "Color Name": "Olive Grove",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 193,
        "SW Paint #": 6043,
        "Color Name": "Unfussy Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 193,
        "SW Paint #": 6044,
        "Color Name": "Doeskin",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 193,
        "SW Paint #": 6045,
        "Color Name": "Emerging\nTaupe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 193,
        "SW Paint #": 9079,
        "Color Name": "Velvety\nChestnut",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 193,
        "SW Paint #": 6046,
        "Color Name": "Swing Brown",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 194,
        "SW Paint #": 6050,
        "Color Name": "Abalone Shell",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 194,
        "SW Paint #": 6051,
        "Color Name": "Sashay Sand",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 194,
        "SW Paint #": 6052,
        "Color Name": "Sandbank",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 194,
        "SW Paint #": 9080,
        "Color Name": "Hushed Auburn",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 195,
        "SW Paint #": 6057,
        "Color Name": "Malted Milk",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 195,
        "SW Paint #": 6058,
        "Color Name": "Likeable Sand",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 195,
        "SW Paint #": 6059,
        "Color Name": "Interface Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 195,
        "SW Paint #": 9081,
        "Color Name": "Redend Point",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 195,
        "SW Paint #": 6060,
        "Color Name": "Moroccan\nBrown",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 196,
        "SW Paint #": 6064,
        "Color Name": "Reticence",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 196,
        "SW Paint #": 6065,
        "Color Name": "Bona Fide Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 196,
        "SW Paint #": 6066,
        "Color Name": "Sand Trap",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 196,
        "SW Paint #": 9082,
        "Color Name": "Chocolate\nPowder",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 196,
        "SW Paint #": 6067,
        "Color Name": "Mocha",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 197,
        "SW Paint #": 6085,
        "Color Name": "Simplify Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 197,
        "SW Paint #": 6086,
        "Color Name": "Sand Dune",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 197,
        "SW Paint #": 6087,
        "Color Name": "Trusty Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 197,
        "SW Paint #": 9083,
        "Color Name": "Dusted Truffle",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 197,
        "SW Paint #": 6088,
        "Color Name": "Nuthatch",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 232,
        "SW Paint #": 6036,
        "Color Name": "Angora",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 232,
        "SW Paint #": 6037,
        "Color Name": "Temperate\nTaupe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 232,
        "SW Paint #": 6038,
        "Color Name": "Truly Taupe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 232,
        "SW Paint #": 9160,
        "Color Name": "Armadillo",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 198,
        "SW Paint #": 6078,
        "Color Name": "Realist Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 198,
        "SW Paint #": 6079,
        "Color Name": "Diverse Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 198,
        "SW Paint #": 6080,
        "Color Name": "Utterly Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 198,
        "SW Paint #": 9084,
        "Color Name": "Cocoa Whip",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 198,
        "SW Paint #": 6081,
        "Color Name": "Down Home",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 199,
        "SW Paint #": 9085,
        "Color Name": "Touch of Sand",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 199,
        "SW Paint #": 9086,
        "Color Name": "Cool Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 199,
        "SW Paint #": 9087,
        "Color Name": "Smoky Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 199,
        "SW Paint #": 9088,
        "Color Name": "Utaupeia",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 199,
        "SW Paint #": 9089,
        "Color Name": "Llama Wool",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 201,
        "SW Paint #": 6099,
        "Color Name": "Sand Dollar",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 201,
        "SW Paint #": 6100,
        "Color Name": "Practical Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 201,
        "SW Paint #": 6101,
        "Color Name": "Sands of Time",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 201,
        "SW Paint #": 9093,
        "Color Name": "Nearly Brown",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 201,
        "SW Paint #": 6102,
        "Color Name": "Portabello",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 204,
        "SW Paint #": 6106,
        "Color Name": "Kilim Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 204,
        "SW Paint #": 6107,
        "Color Name": "Nomadic\nDesert",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 204,
        "SW Paint #": 6108,
        "Color Name": "Latte",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 204,
        "SW Paint #": 9108,
        "Color Name": "Double Latte",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 204,
        "SW Paint #": 6109,
        "Color Name": "Hopsack",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 205,
        "SW Paint #": 9109,
        "Color Name": "Natural Linen",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 205,
        "SW Paint #": 9110,
        "Color Name": "Malabar",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 205,
        "SW Paint #": 9111,
        "Color Name": "Antler Velvet",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 205,
        "SW Paint #": 9112,
        "Color Name": "Song Thrush",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 288,
        "SW Paint #": 7719,
        "Color Name": "Fresco Cream",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 288,
        "SW Paint #": 7518,
        "Color Name": "Beach House",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 288,
        "SW Paint #": 7519,
        "Color Name": "Mexican Sand",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 288,
        "SW Paint #": 7521,
        "Color Name": "Dormer Brown",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 288,
        "SW Paint #": 7522,
        "Color Name": "Meadowlark",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 288,
        "SW Paint #": 7525,
        "Color Name": "Tree Branch",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 284,
        "SW Paint #": 7567,
        "Color Name": "Natural Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 284,
        "SW Paint #": 7547,
        "Color Name": "Sandbar",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 284,
        "SW Paint #": 7548,
        "Color Name": "Portico",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 284,
        "SW Paint #": 7534,
        "Color Name": "Outerbanks",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 284,
        "SW Paint #": 7549,
        "Color Name": "Studio Taupe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 284,
        "SW Paint #": 7535,
        "Color Name": "Sandy Ridge",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 210,
        "SW Paint #": 6155,
        "Color Name": "Rice Grain",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 210,
        "SW Paint #": 6156,
        "Color Name": "Ramie",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 210,
        "SW Paint #": 6157,
        "Color Name": "Favorite Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 210,
        "SW Paint #": 7544,
        "Color Name": "Fenland",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 210,
        "SW Paint #": 6158,
        "Color Name": "Sawdust",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 209,
        "SW Paint #": 9119,
        "Color Name": "Dirty Martini",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 209,
        "SW Paint #": 9121,
        "Color Name": "Sawgrass\nBasket",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 209,
        "SW Paint #": 9122,
        "Color Name": "Dried Edamame",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 209,
        "SW Paint #": 9123,
        "Color Name": "Barro Verde",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 207,
        "SW Paint #": 6148,
        "Color Name": "Wool Skein",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 207,
        "SW Paint #": 6149,
        "Color Name": "Relaxed Khaki",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 207,
        "SW Paint #": 6150,
        "Color Name": "Universal Khaki",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 207,
        "SW Paint #": 9117,
        "Color Name": "Urban Jungle",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 207,
        "SW Paint #": 6151,
        "Color Name": "Quiver Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 135,
        "SW Paint #": 6681,
        "Color Name": "Butter Up",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 133,
        "SW Paint #": 6673,
        "Color Name": "Banana Cream",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 133,
        "SW Paint #": 6674,
        "Color Name": "Jonquil",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 128,
        "SW Paint #": 6365,
        "Color Name": "Cachet Cream",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 128,
        "SW Paint #": 6366,
        "Color Name": "Ambitious\nAmber",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 128,
        "SW Paint #": 6367,
        "Color Name": "Viva Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 128,
        "SW Paint #": 6368,
        "Color Name": "Bakelite Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 127,
        "SW Paint #": 6358,
        "Color Name": "Creamery",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 127,
        "SW Paint #": 6359,
        "Color Name": "Sociable",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 127,
        "SW Paint #": 9011,
        "Color Name": "Ochre",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 127,
        "SW Paint #": 6360,
        "Color Name": "Folksy Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 127,
        "SW Paint #": 6361,
        "Color Name": "Autumnal",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 140,
        "SW Paint #": 6127,
        "Color Name": "Ivoire",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 140,
        "SW Paint #": 6128,
        "Color Name": "Blonde",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 140,
        "SW Paint #": 6129,
        "Color Name": "Restrained\nGold",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 140,
        "SW Paint #": 9024,
        "Color Name": "Vintage Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 140,
        "SW Paint #": 6130,
        "Color Name": "Mannered Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 141,
        "SW Paint #": 6120,
        "Color Name": "Believable Buff",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 141,
        "SW Paint #": 6121,
        "Color Name": "Whole Wheat",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 141,
        "SW Paint #": 6122,
        "Color Name": "Camelback",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 141,
        "SW Paint #": 9025,
        "Color Name": "Coriander\nPowder",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 141,
        "SW Paint #": 6123,
        "Color Name": "Baguette",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 141,
        "SW Paint #": 6124,
        "Color Name": "Cardboard",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 130,
        "SW Paint #": 6379,
        "Color Name": "Jersey Cream",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 130,
        "SW Paint #": 6380,
        "Color Name": "Humble Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 130,
        "SW Paint #": 7682,
        "Color Name": "Bee's Wax",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 130,
        "SW Paint #": 6381,
        "Color Name": "Anjou Pear",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 139,
        "SW Paint #": 6386,
        "Color Name": "Napery",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 139,
        "SW Paint #": 6387,
        "Color Name": "Compatible\nCream",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 139,
        "SW Paint #": 9023,
        "Color Name": "Dakota Wheat",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 139,
        "SW Paint #": 6388,
        "Color Name": "Golden Fleece",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 139,
        "SW Paint #": 6389,
        "Color Name": "Butternut",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 293,
        "SW Paint #": 6672,
        "Color Name": "Morning Sun",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 293,
        "SW Paint #": 7560,
        "Color Name": "Impressive\nIvory",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 293,
        "SW Paint #": 7721,
        "Color Name": "Crescent\nCream",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 293,
        "SW Paint #": 7677,
        "Color Name": "Gold Vessel",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 293,
        "SW Paint #": 7679,
        "Color Name": "Golden Gate",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 294,
        "SW Paint #": 7676,
        "Color Name": "Paper Lantern",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 294,
        "SW Paint #": 7684,
        "Color Name": "Concord Buff",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 294,
        "SW Paint #": 7687,
        "Color Name": "August Moon",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 294,
        "SW Paint #": 7693,
        "Color Name": "Stonebriar",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 294,
        "SW Paint #": 7695,
        "Color Name": "Mesa Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 289,
        "SW Paint #": 7704,
        "Color Name": "Tower Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 289,
        "SW Paint #": 7538,
        "Color Name": "Tamarind",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 289,
        "SW Paint #": 7724,
        "Color Name": "Canoe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 289,
        "SW Paint #": 7725,
        "Color Name": "Yearling",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 290,
        "SW Paint #": 7717,
        "Color Name": "Ligonier Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 290,
        "SW Paint #": 7720,
        "Color Name": "Deer Valley",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 291,
        "SW Paint #": 6113,
        "Color Name": "Interactive\nCream",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 291,
        "SW Paint #": 6114,
        "Color Name": "Bagel",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 291,
        "SW Paint #": 6115,
        "Color Name": "Totally Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 291,
        "SW Paint #": 9186,
        "Color Name": "Carmelized",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 292,
        "SW Paint #": 7723,
        "Color Name": "Colony Buff",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 292,
        "SW Paint #": 7689,
        "Color Name": "Row House Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 292,
        "SW Paint #": 7536,
        "Color Name": "Bittersweet\nStem",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 292,
        "SW Paint #": 7539,
        "Color Name": "Cork Wedge",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 292,
        "SW Paint #": 7690,
        "Color Name": "Townhall Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 292,
        "SW Paint #": 7540,
        "Color Name": "Artisan Tan",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 240,
        "SW Paint #": 6001,
        "Color Name": "Grayish",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 240,
        "SW Paint #": 6002,
        "Color Name": "Essential Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 240,
        "SW Paint #": 6003,
        "Color Name": "Proper Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 240,
        "SW Paint #": 9167,
        "Color Name": "Polished\nConcrete",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 241,
        "SW Paint #": 7022,
        "Color Name": "Alpaca",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 241,
        "SW Paint #": 7023,
        "Color Name": "Requisite Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 241,
        "SW Paint #": 7024,
        "Color Name": "Functional\nGray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 241,
        "SW Paint #": 9168,
        "Color Name": "Elephant Ear",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 241,
        "SW Paint #": 7025,
        "Color Name": "Backdrop",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 242,
        "SW Paint #": 6071,
        "Color Name": "Popular Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 242,
        "SW Paint #": 6072,
        "Color Name": "Versatile Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 242,
        "SW Paint #": 6073,
        "Color Name": "Perfect Greige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 242,
        "SW Paint #": 9169,
        "Color Name": "Chatura Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 242,
        "SW Paint #": 6074,
        "Color Name": "Spalding Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 243,
        "SW Paint #": 7029,
        "Color Name": "Agreeable Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 243,
        "SW Paint #": 7030,
        "Color Name": "Anew Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 243,
        "SW Paint #": 7031,
        "Color Name": "Mega Greige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 243,
        "SW Paint #": 7504,
        "Color Name": "Keystone Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 245,
        "SW Paint #": 7043,
        "Color Name": "Worldly Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 245,
        "SW Paint #": 7044,
        "Color Name": "Amazing Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 245,
        "SW Paint #": 7045,
        "Color Name": "Intellectual\nGray",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 245,
        "SW Paint #": 9171,
        "Color Name": "Felted Wool",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 248,
        "SW Paint #": 9173,
        "Color Name": "Shitake",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 248,
        "SW Paint #": 7506,
        "Color Name": "Loggia",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 248,
        "SW Paint #": 7507,
        "Color Name": "Stone Lion",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 248,
        "SW Paint #": 7633,
        "Color Name": "Taupe Tone",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 248,
        "SW Paint #": 7513,
        "Color Name": "Sanderling",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 248,
        "SW Paint #": 7508,
        "Color Name": "Tavern Taupe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 249,
        "SW Paint #": 7036,
        "Color Name": "Accessible\nBeige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 249,
        "SW Paint #": 7037,
        "Color Name": "Balanced Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 249,
        "SW Paint #": 7038,
        "Color Name": "Tony Taupe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 249,
        "SW Paint #": 9174,
        "Color Name": "Moth Wing",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 250,
        "SW Paint #": 7517,
        "Color Name": "China Doll",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 250,
        "SW Paint #": 7511,
        "Color Name": "Bungalow\nBeige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 250,
        "SW Paint #": 7524,
        "Color Name": "Dhurrie Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 250,
        "SW Paint #": 7512,
        "Color Name": "Pavilion Beige",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 250,
        "SW Paint #": 7501,
        "Color Name": "Threshold\nTaupe",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 250,
        "SW Paint #": 7502,
        "Color Name": "Dry Dock",
        "Trim Only": "",
        "Body & Trim Combo's": "x",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 254,
        "SW Paint #": 7551,
        "Color Name": "Greek Villa",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 255,
        "SW Paint #": 7005,
        "Color Name": "Pure White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 257,
        "SW Paint #": 7006,
        "Color Name": "Extra White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 261,
        "SW Paint #": 7103,
        "Color Name": "Whitetail",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 261,
        "SW Paint #": 6385,
        "Color Name": "Dover White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 261,
        "SW Paint #": 7012,
        "Color Name": "Creamy",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 261,
        "SW Paint #": 9180,
        "Color Name": "Aged White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 261,
        "SW Paint #": 7568,
        "Color Name": "Neutral\nGround",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 263,
        "SW Paint #": 7562,
        "Color Name": "Roman Column",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 263,
        "SW Paint #": 6154,
        "Color Name": "Nacre",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 263,
        "SW Paint #": 7563,
        "Color Name": "Restful White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 263,
        "SW Paint #": 7564,
        "Color Name": "Polar Bear",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 263,
        "SW Paint #": 6133,
        "Color Name": "Muslin",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 263,
        "SW Paint #": 6119,
        "Color Name": "Antique White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 262,
        "SW Paint #": 7105,
        "Color Name": "Paper White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 262,
        "SW Paint #": 7106,
        "Color Name": "Honied White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 262,
        "SW Paint #": 7557,
        "Color Name": "Summer White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 262,
        "SW Paint #": 7556,
        "Color Name": "Cr�me",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 262,
        "SW Paint #": 7559,
        "Color Name": "D�cor White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 262,
        "SW Paint #": 6371,
        "Color Name": "Vanillin",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 262,
        "SW Paint #": 7573,
        "Color Name": "Eaglet Beige",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 256,
        "SW Paint #": 7757,
        "Color Name": "High Reflective White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 256,
        "SW Paint #": 7004,
        "Color Name": "Snowbound",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 256,
        "SW Paint #": 7003,
        "Color Name": "Toque White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 256,
        "SW Paint #": 7028,
        "Color Name": "Incredible\nWhite",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 256,
        "SW Paint #": 7014,
        "Color Name": "Eider White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 256,
        "SW Paint #": 7646,
        "Color Name": "First Star",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 256,
        "SW Paint #": 7648,
        "Color Name": "Big Chill",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 260,
        "SW Paint #": 7100,
        "Color Name": "Arcade White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 260,
        "SW Paint #": 7000,
        "Color Name": "Ibis White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 260,
        "SW Paint #": 6028,
        "Color Name": "Cultured Pearl",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 260,
        "SW Paint #": 6063,
        "Color Name": "Nice White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 260,
        "SW Paint #": 6077,
        "Color Name": "Everyday\nWhite",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 260,
        "SW Paint #": 6035,
        "Color Name": "Gauzy White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 260,
        "SW Paint #": 7021,
        "Color Name": "Simple White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 267,
        "SW Paint #": 7001,
        "Color Name": "Marshmallow",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 267,
        "SW Paint #": 7102,
        "Color Name": "White Flour",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 267,
        "SW Paint #": 7002,
        "Color Name": "Downy",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 267,
        "SW Paint #": 7101,
        "Color Name": "Futon",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 267,
        "SW Paint #": 6084,
        "Color Name": "Modest White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 267,
        "SW Paint #": 6091,
        "Color Name": "Reliable White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 267,
        "SW Paint #": 6098,
        "Color Name": "Pacer White",
        "Trim Only": "x",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 235,
        "SW Paint #": 7075,
        "Color Name": "Web Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 235,
        "SW Paint #": 7076,
        "Color Name": "Cyberspace",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 236,
        "SW Paint #": 7068,
        "Color Name": "Grizzle Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 236,
        "SW Paint #": 7674,
        "Color Name": "Peppercorn",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 226,
        "SW Paint #": 6277,
        "Color Name": "Special Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 226,
        "SW Paint #": 6278,
        "Color Name": "Cloak Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 240,
        "SW Paint #": 6004,
        "Color Name": "Mink",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 240,
        "SW Paint #": 6005,
        "Color Name": "Folkstone",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 277,
        "SW Paint #": 7520,
        "Color Name": "Plantation\nShutters",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 197,
        "SW Paint #": 6089,
        "Color Name": "Grounded",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 197,
        "SW Paint #": 6090,
        "Color Name": "Java",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 196,
        "SW Paint #": 6068,
        "Color Name": "Brevity Brown",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 196,
        "SW Paint #": 6069,
        "Color Name": "French Roast",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 277,
        "SW Paint #": 6076,
        "Color Name": "Turkish Coffee",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 277,
        "SW Paint #": 9183,
        "Color Name": "Dark Clove",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 277,
        "SW Paint #": 7515,
        "Color Name": "Homestead\nBrown",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 225,
        "SW Paint #": 6249,
        "Color Name": "Storm Cloud",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 225,
        "SW Paint #": 6250,
        "Color Name": "Granite Peak",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 225,
        "SW Paint #": 6251,
        "Color Name": "Outerspace",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 232,
        "SW Paint #": 6039,
        "Color Name": "Poised Taupe",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 232,
        "SW Paint #": 6040,
        "Color Name": "Less Brown",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 232,
        "SW Paint #": 6041,
        "Color Name": "Otter",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 193,
        "SW Paint #": 6047,
        "Color Name": "Hot Cocoa",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 193,
        "SW Paint #": 6048,
        "Color Name": "Terra Brun",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 195,
        "SW Paint #": 6061,
        "Color Name": "Tanbark",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 195,
        "SW Paint #": 6062,
        "Color Name": "Rugged Brown",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 278,
        "SW Paint #": 7645,
        "Color Name": "Thunder Gray",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 278,
        "SW Paint #": 7062,
        "Color Name": "Rock Bottom",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 278,
        "SW Paint #": 9184,
        "Color Name": "Foxhall Green",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 278,
        "SW Paint #": 7750,
        "Color Name": "Olympic Range",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 278,
        "SW Paint #": 7730,
        "Color Name": "Forestwood",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 278,
        "SW Paint #": 6174,
        "Color Name": "Andiron",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 253,
        "SW Paint #": 9176,
        "Color Name": "Dress Blues",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 253,
        "SW Paint #": 9177,
        "Color Name": "Salty Dog",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 253,
        "SW Paint #": 9178,
        "Color Name": "In the Navy",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 253,
        "SW Paint #": 2739,
        "Color Name": "Charcoal Blue",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 173,
        "SW Paint #": 9059,
        "Color Name": "Silken Peacock",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 173,
        "SW Paint #": 9060,
        "Color Name": "Connor's\nLakefront",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 220,
        "SW Paint #": 6228,
        "Color Name": "Refuge",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 220,
        "SW Paint #": 6229,
        "Color Name": "Tempe Star",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 220,
        "SW Paint #": 6230,
        "Color Name": "Rainstorm",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 217,
        "SW Paint #": 6207,
        "Color Name": "Retreat",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 217,
        "SW Paint #": 6208,
        "Color Name": "Pewter Green",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 215,
        "SW Paint #": 6186,
        "Color Name": "Dried Thyme",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 215,
        "SW Paint #": 6187,
        "Color Name": "Rosemary",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 214,
        "SW Paint #": 6193,
        "Color Name": "Privilege Green",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 214,
        "SW Paint #": 6194,
        "Color Name": "Basil",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 214,
        "SW Paint #": 6195,
        "Color Name": "Rock Garden",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 155,
        "SW Paint #": 6432,
        "Color Name": "Garden Spot",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 155,
        "SW Paint #": 6433,
        "Color Name": "Inverness",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 145,
        "SW Paint #": 6418,
        "Color Name": "Rural Green",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 145,
        "SW Paint #": 6419,
        "Color Name": "Saguaro",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 185,
        "SW Paint #": 6523,
        "Color Name": "Denim",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 185,
        "SW Paint #": 6524,
        "Color Name": "Commodore",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 221,
        "SW Paint #": 9140,
        "Color Name": "Blustery Sky",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 221,
        "SW Paint #": 9141,
        "Color Name": "Waterloo",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 221,
        "SW Paint #": 9142,
        "Color Name": "Moscow\nMidnight",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 243,
        "SW Paint #": 7032,
        "Color Name": "Warm Stone",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 243,
        "SW Paint #": 7033,
        "Color Name": "Brainstorm\nBronze",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 211,
        "SW Paint #": 6172,
        "Color Name": "Hardware",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 211,
        "SW Paint #": 6173,
        "Color Name": "Cocoon",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 211,
        "SW Paint #": 7745,
        "Color Name": "Muddled Basil",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 204,
        "SW Paint #": 6110,
        "Color Name": "Steady Brown",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 204,
        "SW Paint #": 6111,
        "Color Name": "Coconut Husk",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 141,
        "SW Paint #": 6125,
        "Color Name": "Craft Paper",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 120,
        "SW Paint #": 6635,
        "Color Name": "Determined\nOrange",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 120,
        "SW Paint #": 6636,
        "Color Name": "Husky Orange",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 130,
        "SW Paint #": 6382,
        "Color Name": "Ceremonial\nGold",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 130,
        "SW Paint #": 6383,
        "Color Name": "Golden Rule",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 130,
        "SW Paint #": 6384,
        "Color Name": "Cut the\nMustard",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 139,
        "SW Paint #": 6390,
        "Color Name": "Bosc Pear",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 139,
        "SW Paint #": 6391,
        "Color Name": "Gallant Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 140,
        "SW Paint #": 6131,
        "Color Name": "Chamois",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 140,
        "SW Paint #": 6132,
        "Color Name": "Relic Bronze",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 171,
        "SW Paint #": 6488,
        "Color Name": "Grand Canal",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 171,
        "SW Paint #": 6489,
        "Color Name": "Really Teal",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 165,
        "SW Paint #": 6775,
        "Color Name": "Briny",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 114,
        "SW Paint #": 6326,
        "Color Name": "Henna Shade",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 114,
        "SW Paint #": 6327,
        "Color Name": "Bold Brick",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 114,
        "SW Paint #": 6328,
        "Color Name": "Fireweed",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 122,
        "SW Paint #": 6657,
        "Color Name": "Amber Wave",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 122,
        "SW Paint #": 7703,
        "Color Name": "Earthen Jug",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 126,
        "SW Paint #": 6356,
        "Color Name": "Copper\nMountain",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 128,
        "SW Paint #": 6369,
        "Color Name": "Tassel",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": ""
    },
    {
        "Strip #": 128,
        "SW Paint #": 6370,
        "Color Name": "Saucy Gold",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 128,
        "SW Paint #": 7709,
        "Color Name": "Copper Pot",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 251,
        "SW Paint #": 6258,
        "Color Name": "Tricorn Black",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 309,
        "SW Paint #": 2801,
        "Color Name": "Rookwood\nDark Red",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 309,
        "SW Paint #": 2802,
        "Color Name": "Rookwood Red",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 309,
        "SW Paint #": 2803,
        "Color Name": "Rookwood\nTerra Cotta",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 115,
        "SW Paint #": 6333,
        "Color Name": "Foxy",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 115,
        "SW Paint #": 6334,
        "Color Name": "Flower Pot",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 115,
        "SW Paint #": 6335,
        "Color Name": "Fired Brick",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 101,
        "SW Paint #": 6871,
        "Color Name": "Positive Red",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 101,
        "SW Paint #": 6861,
        "Color Name": "Radish",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 101,
        "SW Paint #": 6866,
        "Color Name": "Heartthrob",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 275,
        "SW Paint #": 7586,
        "Color Name": "Stolen Kiss",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 275,
        "SW Paint #": 7582,
        "Color Name": "Salute",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 275,
        "SW Paint #": 7583,
        "Color Name": "Wild Currant",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 275,
        "SW Paint #": 7585,
        "Color Name": "Tomato",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    },
    {
        "Strip #": 275,
        "SW Paint #": 7593,
        "Color Name": "Rustic Red",
        "Trim Only": "",
        "Body & Trim Combo's": "",
        "Front Door & Shutter Only": "x"
    }
]


function rankingSorter(firstKey, secondKey) {
    return function (a, b) {
        if (a[firstKey] > b[firstKey]) {
            return 1;
        } else if (a[firstKey] < b[firstKey]) {
            return -1;
        }
        else {
            if (a[secondKey] > b[secondKey]) {
                return -1;
            } else if (a[secondKey] < b[secondKey]) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}

async function removeDuplicates(arr) {
    var clean = arr.filter((arr, index, self) =>
        index === self.findIndex((t) => (t.save === arr.save && t.colorNumber === arr.colorNumber)))
    return clean
}

async function main() {
    var colors = await getColors()
    var content = "<html>\n<head></head>\n<body>\n<h1>Approved colors</h1>\n"
    content = content + "<style> * { font-family: Arial,Helvetica Neue,Helvetica,sans-serif; padding: 10px 10px 10px 10px;} </style>\n"
    content = content + "<table>"
    content = content + "<tr><th>Color</th><th>Strip</th><th>Number</th><th>Trim Only</th><th>Body & Trim Combo's</th><th>Front Door & Shutter Only</th></tr>\n"
    for (let c in colors) {
        for (let a in approved) {
            if (colors[c].colorNumber == approved[a]['SW Paint #']) {
                if (colors[c].isDark) {
                    textColor = "color:white;"
                }
                else {
                    textColor = "color:black;"
                }
                var trim = "<td></td>"
                var bodyAndTrim = "<td></td>"
                var frontShutter = "<td></td>"
                var text = "<td></td>"
                rgb = "style=" + textColor + "background-color:rgb(" + colors[c].red + ',' + colors[c].green + "," + colors[c].blue + ");"
                if (approved[a]['Trim Only'] != '') {
                    trim = "<td>Trim Only</td>"
                }
                if (approved[a]["Body & Trim Combo's"] != "") {
                    bodyAndTrim = "<td>Body and Trim Combo</td>"
                }
                if (approved[a]["Front Door & Shutter Only"] != '') {
                    frontShutter = "<td>Front Door and Shutter Only</td>"
                }
                strip = "<td>" + approved[a]['Strip #'] + "</td>"
                number = "<td>" + colors[c].colorNumber + "</td>"
                name = "<td><a style=" + textColor + " href=https://www.sherwin-williams.com/homeowners/color/find-and-explore-colors/paint-colors-by-family/SW" + colors[c].colorNumber + "-" + colors[c].name.toLowerCase().replaceAll(" ", "-") + ">" + colors[c].name + "</td></a>"
                text = name + strip + number + trim + bodyAndTrim + frontShutter
                content = content + "<tr " + rgb + ">" + text + "</tr>\n"
                break
            }
        }
    }

    content = content + "</table>\n</body>\n</html>"

    // Save to File

    const fs = require('fs');
    fs.writeFile('colors.html', content, err => {
        if (err) {
            console.error(err);
        }
    });
}

main()