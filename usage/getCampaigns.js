const util = require('util')
const { getCampaigns } = require('../src/campaign')

async function getAllCampaigns() {
	const data = await getCampaigns()
	console.log(util.inspect(data, {showHidden: false, depth: null}))
	return data
}

getAllCampaigns()