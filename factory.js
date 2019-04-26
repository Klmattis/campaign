import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const _ADDRESS = process.env.CONTRACT_ADDRESS;

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x87132721003770C7be355481789db08B9Fa07020"
);

export default instance;