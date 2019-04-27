var CampaignFactory = artifacts.require("CampaignFactory");

module.exports = async function(deployer) {
    await deployer.deploy(CampaignFactory).then(() => console.log("Contract deployed to: " + CampaignFactory.address));
};