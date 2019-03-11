/**
 * Utility functions.
 */
import { xml2json } from 'xml-js'
import fetch from 'isomorphic-fetch'

/**
  * Fetches data from the url and convert it to JSON.
  *
  * @param {String} url
  */
export async function fetchDataInJSON (url) {
  try {
    const data = await
    fetch(url, {
      method: 'GET',
      // the following setting is required by CORS-ANYWHERE api
      headers: new Headers({
        'X-Requested-With': '*'
      })
    })

    // Parsing the XML readable stream
    const resp = await data.text()

    // Convert XML response to JSON
    const jsonResp = xml2json(resp, { compact: true })

    return jsonResp
  } catch (err) {
    console.log(err)
    throw new Error('Error encountered', err.message)
  }
}

/**
  * Fetches data from the url and convert it to JSON.
  * This is used when interacting with our own APIs.
  *
  * @param {String} url
  */
export async function fetchDataInJSON2 (url) {
  try {
    let response = await fetch(url)
    response = await response.json()

    // Convert XML response to JSON
    const jsonResp = xml2json(response.data, { compact: true })

    return jsonResp
  } catch (err) {
    console.log(err)
    throw new Error('Error encountered', err.message)
  }
}
