require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle foot custom repeat noise assault grace cover army gift'; 
let testAccounts = [
"0x463a2a40872d9b3078d165378e62a109bbda984fa3cbd32cae1ef1c598da0bd0",
"0xd773aaefa394483e2256025ece2881327feece6cc3e54b04d94508f4bc1a4034",
"0xf334098e44d9ff038fe0cad5fc35f8f320d41939047c164879a79e6274e29b5d",
"0x62ced611a421d071a2c7b07d01d0578f210379631101de8ae2298e924c4448f3",
"0x89cf382a269f54ac964f8efe4c67965502883d572042f0f204baaa8477e45595",
"0x453824f0bfa1ad436e22118f677410062771f842bd27bbdc5a2ed6c3a9622dd9",
"0x3c50a768406ee6d1e69c55a02a13dd25389a0799722d2a2df292e273b36f7d4e",
"0x2974fa8b57d0d259e7ef36922e328fc9267957ccdc0a4ed452ee0d3bbc2a96c2",
"0x56bf53801d57645d82ad2bfbda07346f49165b5696fb5118c9e922c72ecaea7e",
"0x7461aca0094a1977a4d6eb5af8cf95472bcc181386b19e05161a451da7894029"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
