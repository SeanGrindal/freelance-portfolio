import { EventEmitter } from 'events'

const emitter = new EventEmitter()
emitter.setMaxListeners(30)
export default emitter
