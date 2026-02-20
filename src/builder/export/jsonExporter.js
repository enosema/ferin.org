/**
 * JSON Exporter
 * Exports specification to JSON format
 */

export function exportToJson(specification) {
  return JSON.stringify(specification, null, 2)
}

export default exportToJson
