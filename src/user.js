const querystring = require('querystring')
const fetch = require('node-fetch')
const headers = require('./utils/header')

const API_BASE_URL = 'https://beta-api.customer.io/v1/api'

async function getUserAttributes(id) {
  const url = `${API_BASE_URL}/customers/${id}/attributes`
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

async function updateUserAttributes(id, attributes) {
  const url = `https://track.customer.io/api/v1/customers/${id}`
  const response = await fetch(url, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(attributes)
  })

  const data = await response.json()

  if (response.status === 422) {
    throw new Error(`Error ${JSON.stringify(data)}`)
  }

  return data
}

module.exports = {
  getUserAttributes,
  updateUserAttributes
}