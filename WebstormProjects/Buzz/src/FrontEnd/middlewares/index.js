import {logger} from './custom.middlewares'
import thunkMiddleware from 'redux-thunk'

export const middleware = [
    logger,
    thunkMiddleware
]