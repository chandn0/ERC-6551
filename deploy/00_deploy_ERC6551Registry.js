const { verify } = require("../hardhat.config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const erc6551registry = await deploy('ERC6551Registry', {
        from: deployer,
        log: true,
    });
    // await run(`verify:verify`, {
    //     address: erc6551registry.address,
    // });

};
module.exports.tags = ['ERC6551Registry'];