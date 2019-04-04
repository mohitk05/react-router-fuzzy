import { createBrowserHistory } from 'history'
console.log(process.env.PUBLIC_URL)
let history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
})

export default history