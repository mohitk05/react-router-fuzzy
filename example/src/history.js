import { createBrowserHistory } from 'history'

let history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
})

export default history