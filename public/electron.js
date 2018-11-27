const electron = require('electron');
const { app, BrowserWindow, Menu, dialog } = electron;
//const BrowserWindow = electron.BrowserWindow

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 800,
    show: false,
    icon: path.join(__dirname, 'assets/icon.ico'),
    webPreferences : { backgroundThrottling: false },
    title: 'Analytix Variable Editor'
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  //Attach the main Menu
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
  
  // Only show when window is ready
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
  // Clear memory when window closed
  mainWindow.on('closed', () => mainWindow = null);
  // Set up dev tools if in development mode development is for work computer, dev-home is for home computer
  if (isDev) {
    BrowserWindow.addDevToolsExtension('C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.4.3_0');
    BrowserWindow.addDevToolsExtension('C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.5_1');
    //--- Home
    // BrowserWindow.addDevToolsExtension(`C:/Users/Mark/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.4.3_0`);
    // BrowserWindow.addDevToolsExtension(`C:/Users/Mark/AppData/Local/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.4_1`);
    mainWindow.toggleDevTools();
  }
}


// Create window when app is 'ready'
app.on('ready', createWindow);

//------------------------------------------------
//Setup Help window function to show help from menu
//The showUserGuide function is called from the Help/User Guide menu option
let helpWindow;
const showUserGuide = () => {
  //If helpWindow already defined, give it focus and leave function
  if (helpWindow) {
    helpWindow.focus();
    return;
  }
  //Define new BrowserWindow
  helpWindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    title: 'Analytix Installer User Guide',
    icon: path.join(__dirname, 'assets/icon.ico')
  });
  //When use closes help window, null its variable
  helpWindow.on('closed', () => {
    helpWindow = null;
  });
  //Load help file HTML file into BrowserWindow
  helpWindow.loadURL(`file://${__dirname}/public/VariableEditorHelp.html`);
};
//------------------------------------------------

//------------------------------------------
const exitAccelerator = process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q';
const devMenu = {
  label: 'Dev',
  submenu: [
    {role: 'reload'},
    {role: 'forcereload'},
    {role: 'toggledevtools'}
  ]
};

let menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: exitAccelerator,
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'User Guide',
        click() {
          showUserGuide();
        }
      },
      {type: 'separator'},
      {
        label: 'About',
        click() {
          let message = 'Analytix Variable Editor v1.0';
          dialog.showMessageBox({type: 'info', message, title: 'Newscycle Solutions - Analytix Variable Editor'});
        }
      }
    ]
  }
];

//Add a 'Dev' menu option if in development mode
//if (isDev) {
  menuTemplate.push(devMenu);
//}

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});