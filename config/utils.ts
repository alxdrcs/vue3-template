declare type Recordable<T = any> = Record<string, T>
export const wrapperEnv = (envConf: Recordable): ViteEnv => {
  const ret: any = {}
  for (const envName of Object.keys(envConf)) {
    let realVal = envConf[envName].replace(/\\n/g, '\n')
    realVal = realVal === 'true' ? true : realVal === 'false' ? false : realVal
    if (envName === 'VITE_PORT') {
      realVal = Number(realVal)
    }
    if (envName === 'VITE_PROXY' && realVal) {
      try {
        realVal = JSON.parse(realVal.replace(/'/g, '"'))
      } catch (error) {
        realVal = ''
      }
    }
    ret[envName] = realVal
    if (typeof realVal === 'string') {
      process.env[envName] = realVal
    } else if (typeof realVal === 'object') {
      process.env[envName] = JSON.stringify(realVal)
    }
  }
  return ret
}
