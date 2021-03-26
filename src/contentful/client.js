import * as contentful from 'contentful' 
// import { createClient } from 'contentful';


const client = contentful.createClient({
    space: 'h90yhif7nccp',
    accessToken: 'zUTQcO6Jxlq4dEOK0q_XeN9HNGCaA6_QvogMFblAFbA'
})

export default client;