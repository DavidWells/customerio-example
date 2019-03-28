const util = require('util')
const { getCampaign } = require('../src/campaign')

async function getSingleCampaign(id) {
	const data = await getCampaign(id)
	console.log(util.inspect(data, {showHidden: false, depth: null}))
	return data
}

const id = '7' // add your Campaign id
getSingleCampaign(id)