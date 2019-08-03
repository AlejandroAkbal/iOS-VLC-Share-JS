const open = require('open');
const { Resolver } = require('dns').promises;
const resolver = new Resolver();


var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);




// Define the LAN name of the iPad
const scriptSettings = {
    hostname: "akbal.dev"
}

function lookup(hostname) {

    if (typeof hostname === 'undefined') {
        hostname = scriptSettings.hostname;
        console.log(`Defaulted to "${hostname}" because no hostname was passed`)
    }

    resolver.resolve4(hostname).then((addresses) => {
        console.log(addresses);
        open(addresses);
    });

}
lookup(myArgs);






/* (async () => {
    // Opens the image in the default image viewer and waits for the opened app to quit
    dns.lookup('ipad-de-alejandro.local', function (err, result) {
        console.log(result)
    });

    // Opens the URL in the default browser
    await open('https://sindresorhus.com');




})(); */