require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot elder raise noise assume honey light army gift'; 
let testAccounts = [
"0x19892bed1edb9117cf5fbe4729a63191f8331cbea5dfd1baff5bec052197d17e",
"0x3961f9f58a3194670b64c477c2bcd9df0846bf36c7c236c5441fa483bbeb19ee",
"0x3c80d1f0c82729764ce09bc8f89486451d00a89c7e4964f84ed4f23b7737bf3a",
"0xe784bd59e9a55555f82610dbc1c8e7218f53598f59f1e3fa6bc7b186f79ecd2a",
"0xb94e421b28f90633c6d9f22f0d53af48f8676cd521638a7e991f9189431d8137",
"0x73ff3115f4c79919e598f2f305cc04c905ea06e5ca03972e384402a6d3cf982f",
"0x22d2cf6a60df8245663b8ccfd3c2c92e87cf4ae0963d2cd5922414a3b4e405b7",
"0xe37db86bb0ab761191988d46e4cdac972f95f96750997152e5d3e5fc8ed26135",
"0x121f1b44f85e44f52734eacfcea01dcf12db451a644dc90448b45674968b89f7",
"0xf8c4be7751d1610ad06abdc716c50f95a61d9796da859df66a37a4f34e5c72c9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

