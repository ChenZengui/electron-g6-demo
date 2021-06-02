import defaultEvent from './defaultEvent';

class ElectronEvent{
    constructor(){
        this.init()
    }
    init(){
        this.defaultEvent = defaultEvent;
    }
}
export default ElectronEvent;