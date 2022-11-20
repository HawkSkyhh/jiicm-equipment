import type { HttpConfig } from "@/http/type/httpConfigType"
const env = process.env.NODE_ENV === 'production' ? 'pro' : 'dev'
const PREFIX = '/app'
const VERSION = 'v1'
const PORT = 7001
let exports: HttpConfig;
if (env === 'dev') {
    exports = {
        proxyBaseUrl: PREFIX,
        version: VERSION,
        port: `${PORT}`,
        baseUrl: `${location.protocol}//localhost:${PORT}`
    }
} else  {
    exports = {
        proxyBaseUrl: PREFIX,
        version: VERSION,
        port: `${PORT}`,
        baseUrl: `${location.protocol}//localhost:${PORT}`
    }
} 
export default exports
