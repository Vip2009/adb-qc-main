const version = require('../../package.json').version;

const banner = `
  
      Welcome to SB Quick Connect
     Wi-Fi - QR Scanner - Pairing Code

`;

async function versionUtils() {
  console.log(banner);

  console.log(`
VERSION INFO:

ADB-QC: ${version}
Node.js:   ${process.version}
OS:        ${process.platform}
`);

  return process.exit(0);
}

module.exports = {
  versionUtils,
  banner
};