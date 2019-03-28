const config = require('../../config.json')

const CUSTOMER_IO_TOKEN = process.env.CUSTOMER_IO_TOKEN || config.CUSTOMER_IO_TOKEN

module.exports = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${Buffer.from(CUSTOMER_IO_TOKEN).toString('base64')}`
}