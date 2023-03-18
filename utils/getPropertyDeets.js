import { fetchAPI, baseUrl } from "./fetchAPI"

export default async function propertyDeets(id) {
    const data = await fetchAPI(`${baseUrl}/properties/v3/detail/?property_id=${id}`)


    return data
}