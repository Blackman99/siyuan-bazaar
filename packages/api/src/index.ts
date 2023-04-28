const BASE = '/api'

const createModuleApi = (modulePath: string) => (subPath: string) => (jsonBody = {}) => fetch(`${BASE}/${modulePath}/${subPath}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(jsonBody),
}).then(r => r.json())

const createAttrModuleApi = createModuleApi('attr')

const updateAttrApi = createAttrModuleApi('setBlockAttrs')

const getAttrApi = createAttrModuleApi('getBlockAttrs')

/**
 * Update block attrs
 * @param {string} id block ID
 * @param {object} attr attributes object
 * @returns
 */
export const updateAttr = (id: string, attrs: Record<string, any>) => updateAttrApi({
  id,
  attrs,
})

/**
 * Get block attributes
 * @param {string} id block ID
 * @returns
 */
export const getBlockAttrs = (id: string) => getAttrApi({ id })
