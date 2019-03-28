const util = require('util')
const { getCampaignMetrics } = require('../src/campaign')

async function getCampaignStats(id) {
	const data = await getCampaignMetrics(id)
	console.log(util.inspect(data, {showHidden: false, depth: null}))
	return data
}

const id = '7'
getCampaignStats(id)