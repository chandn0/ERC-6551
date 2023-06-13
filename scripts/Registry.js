const hre = require("hardhat");
const { ethers } = require('hardhat');
// importing the json file from ../deployments/buildbear/MainContract.json
const NFTAddress = require("../deployments/buildbear/Nft.json").address;
const RegistryAddress = require("../deployments/buildbear/ERC6551Registry.json").address;
const ERC6551AccountAddress = require("../deployments/buildbear/ERC6551Account.json").address;

async function main() {

    const [deployer, account2] = await hre.ethers.getSigners();


    const NFT = await hre.ethers.getContractAt("NFT", NFTAddress);
    const Registry = await hre.ethers.getContractAt("ERC6551Registry", RegistryAddress);
    const ERC6551Account = await hre.ethers.getContractAt("ERC6551Account", ERC6551AccountAddress);
    // nft mint

    const mint = await NFT.safeMint(deployer.address, "https://ipfs//CID");

    //Should create TokenBoundAccount successfuly
    const newAccount = await Registry.callStatic.createAccount(
        ERC6551Account.address, // implementation contract
        1, //  chainId
        NFT.address, // parent NFT
        3, // token ID
        1, // salt
        "0x" // init calldata
    );

    //new account address 
    const address = await Registry.account(
        ERC6551Account.address, // implementation contract
        1, // chainId
        NFT.address, // parent NFT
        3, // token ID
        1, // salt
    );
    console.log("account", address);


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
