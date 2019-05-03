# Campaign
Crowdfunding contract for ethical procurement

## Background
Crowdfunding is a very popular method for procuring capital to fund a project. The issue is that bad actors can take advantage of the kindness of others by disappearing with the raised funds.
This makes crowdfunding a great candidate for a blockchain use case. This project, "campaign", seeks to minimize the corruption in crowdfunding by never letting the manager touch the raised funds directly.
Instead, the manager issues requests to release money to designated accounts, which is then approved or declined by the project backers. 
This gives the backers the power to audit the destination address, as well as the stated purpose of the funds, and make an informed decision on whether or not the request should be fulfilled.

## Implementation
The project uses the contract factory design pattern to allow other users the ability to create their own campaign contracts.
Restrictions are placed such that noone may change an existing contract besides the contract owner. Campaign is a submodule of the Portfolio project,
which interacts with the contract through a user interface.

A live version of the project can be found at https://port-fol.io/campaign.

## Install
Use the following steps to install the application locally:
1. Clone this repository under your portfolio/ethereum/ directory.
2. Run the following in the campaign directory:
```bash
npm install 
```

## Compile
Use the following steps to compile the campaign smart contract:
1. Run the following in the campaign directory:
```bash
node compile.js
```
2. Confirm that the vitae/build/ directory contains Campaign.json and CampaignFactory.json.

## Deploy
Use the following steps to compile the campaign smart contract:
1. Run the following in the campaign directory:
```bash
node deploy.js
```
2. In your terminal, take note of the address of the newly deployed contract.
3. Within /campaign/factory.js, replace the existing contract address with your own from step 2.

See Klmattis/portfolio for instructions on running the application used to view this project.

