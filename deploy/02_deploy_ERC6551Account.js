const { verify } = require("../hardhat.config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const erc6551account = await deploy('ERC6551Account', {
        from: deployer,
        log: true,
    });
    // await run(`verify:verify`, {
    //     address: erc6551account.address,
    // });

};
module.exports.tags = ['ERC6551Account'];