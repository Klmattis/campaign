import web3 from '../web3';
import CampaignFactory from './build/contracts/CampaignFactory.json';

const _ADDRESS = process.env.CONTRACT_ADDRESS;

const instance = new web3.eth.Contract(
	CampaignFactory.abi,
	'0x87132721003770C7be355481789db08B9Fa07020'
);

export default instance;