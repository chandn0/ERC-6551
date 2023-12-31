const { verify } = require("../hardhat.config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const basicNFT = await deploy('NFT', {
        from: deployer,
        log: true,
    });
    // await run(`verify:verify`, {
    //     address: basicNFT.address,
    // });

};
module.exports.tags = ['NFT'];