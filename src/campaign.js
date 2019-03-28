const querystring = require('querystring')
const fetch = require('node-fetch')
const headers = require('./utils/header')

const API_BASE_URL = 'https://beta-api.customer.io/v1/api'

async function getCampaigns() {
  const url = `${API_BASE_URL}/campaigns`
  const response = await fetch(url, {
    method: 'GET',
    headers: headers
  })

  const data = await response.json()

  if (response.status === 422) {
    throw new Error(`Error ${JSON.stringify(data)}`)
  }

  return data
}

// https://customer.io/docs/api/#apibeta-apicampaignscampaigns_get
async function getCampaign(id) {
  const url = `${API_BASE_URL}/campaigns/${id}`
  const response = await fetch(url, {
    method: 'GET',
    headers: headers
  })

  const data = await response.json()

  if (response.status === 422) {
    throw new Error(`Error ${JSON.stringify(data)}`)
  }

  return data
}

async function getCampaignMetrics(id) {
  const url = `${API_BASE_URL}/campaigns/${id}/metrics`
  const response = await fetch(url, {
    method: 'GET',
    headers: headers
  })

  const data = await response.json()

  if (response.status === 422) {
    throw new Error(`Error ${JSON.stringify(data)}`)
  }

  return data
}

async function getCampaignTriggers(id) {
  const url = `${API_BASE_URL}/campaigns/${id}/triggers`
  const response = await fetch(url, {
    method: 'GET',
    headers: headers
  })

  const data = await response.json()

  if (response.status === 422) {
    throw new Error(`Error ${JSON.stringify(data)}`)
  }

  return data
}

async function getCampaignMessages(id) {
  const url = `${API_BASE_URL}/campaigns/${id}/messages`
  const response = await fetch(url, {
    method: 'GET',
    headers: headers
  })

  const data = await response.json()

  if (response.status === 422) {
    throw new Error(`Error ${JSON.stringify(data)}`)
  }

  return data
}

module.exports = {
  getCampaigns,
  getCampaign,
  getCampaignMetrics,
  getCampaignTriggers,
  getCampaignMessages,
}