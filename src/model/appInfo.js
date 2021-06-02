import ElectronEvent from "./event/index"
import windowInfo from "./windowInfo"
export default {
    init(){
        this.electronEvent = new ElectronEvent(); 
        windowInfo.creatMainWidow();
    }
}