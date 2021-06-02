import { BrowserWindow } from 'electron';
const baseURL = process.env.NODE_ENV === 'development'
   ? `http://localhost:9081`
   : `file://${__dirname}`;
const webPreferences = {
   devTools: true,
   nodeIntegration: true, // 是否集成 Nodejs
   enableRemoteModule: true,
   contextIsolation: false
}
let windowSetting = {
   workflowEditor: {
      name: "workflowEditor",
      desc: "设计器",
      url: process.env.NODE_ENV === 'development'
         ? baseURL + `/workflow`
         : baseURL + `/workflow/index.html`,
      setting: {
         height: 650,
         width: 1000,
         autoHideMenuBar: true,
         title: '设计器',
         backgroundColor: '#f3f3f3',
         webPreferences: webPreferences
      }
   }
}
export default {
   windowList: {},
   creatWidow(name) {
      if (!windowSetting[name]) {
         return null;
      }
      let windowInfo = windowSetting[name];
      let window = new BrowserWindow(windowInfo.setting)
      this.windowList[windowInfo.name] = window;
      window.loadURL(windowInfo.url);
      window.on('closed', () => {
         delete this.windowList[windowInfo.name];
      })
      return window;
   },
   creatMainWidow() {
      return this.creatWidow("workflowEditor");
   }
}