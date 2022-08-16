
let csvToJson = require('convert-csv-to-json');
let approved = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('approved.csv');

let fetch = require('node-fetch');

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
    }).catch(err => {console.log(err)});

    let data = await response.json().catch(err => {console.log(err)})
    data = removeDuplicates(data.sort(rankingSorter("storeStripLocator", "colorNumber")))
    return data
}

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
    content = content + "<tr><th>Color</th><th>Strip</th><th>Number</th><th>Trim Only</th><th>Body & Trim Combos</th><th>Front Door & Shutter Only</th></tr>\n"
    for (let c in colors) {
        for (let a in approved) {
            if (colors[c].colorNumber == approved[a]['SW_Paint_#']) {
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
                if (approved[a]['Trim_Only'] != '') {
                    trim = "<td>Trim Only</td>"
                }
                if (approved[a]["Body_&_Trim_Combos"] != "") {
                    bodyAndTrim = "<td>Body and Trim Combos</td>"
                }
                if (approved[a]["Front_Door_&_Shutter_Only"] != '') {
                    frontShutter = "<td>Front Door and Shutter Only</td>"
                }
                strip = "<td>" + approved[a]['Strip #'] + "</td>"
                number = "<td>" + colors[c].colorNumber + "</td>"
                name = "<td><a style=" + textColor + " href=https://www.sherwin-williams.com/homeowners/color/find-and-explore-colors/paint-colors-by-family/SW" + colors[c].colorNumber + "-" + colors[c].name.toLowerCase().replace(/-/g, "-") + ">" + colors[c].name + "</td></a>"
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