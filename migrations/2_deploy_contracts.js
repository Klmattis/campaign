var CampaignFactory = artifacts.require("CampaignFactory");

module.exports = async function(deployer) {
    const deployedCampaignFactory = await deployer.deploy(CampaignFactory).then(() => console.log("Contract deployed to: " + CampaignFactory.address));
};