import { ipcMain } from 'electron';
import windowInfo from '../windowInfo';
import eventInfo from './eventName';

class DefaultEvent {
    constructor() {
        this.bindEvent();
    }
    bindEvent() {
        ipcMain.on(eventInfo.default.openOther, (event, arg) => {
            windowInfo.creaOtherWidow();
        });
        ipcMain.on(eventInfo.default.closeOther, (event, arg) => {
            if (windowInfo.windowList.other) {
                windowInfo.windowList.other.close();
            }
        });
    }
}
export default new DefaultEvent()