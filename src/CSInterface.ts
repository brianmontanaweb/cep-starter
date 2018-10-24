declare var ret: any;
declare var cep: any;
declare var window: any;

const EvalScript_ErrMessage = 'EvalScript error.';

export class CSXSWindowType {
  _PANEL: string;
  _MODELESS: string;
  _MODAL_DIALOG: string;

  constructor(
    _PANEL: string,
    _MODELESS: string,
    _MODAL_DIALOG: string
  ) {
    this._PANEL = 'Panel';
    this._MODELESS = 'Modeless';
    this._MODAL_DIALOG = 'ModalDialog';
  }
}

export class Version {
  major: string;
  minor: string;
  micro: string;
  special: string;
  MAX_NUM: number;

  constructor(
    major: string,
    minor: string,
    micro: string,
    special: string
  ) {
    this.major = major;
    this.minor = minor;
    this.micro = micro;
    this.special = special;
    this.MAX_NUM = 999999999;
  }
}

export class VersionBound {
  version: string;
  inclusive: string;

  constructor(
    version: string,
    inclusive: string
  ) {
    this.version = version;
    this.inclusive = inclusive;
  }
}

export class VersionRange {
  lowerBound: string;
  upperBound: string;

  constructor(
    lowerBound: string,
    upperBound: string
  ) {
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
  }
}

export class Runtime {
  name: string;
  versionRange: string;

  constructor(
    name: string,
    versionRange: string
  ) {
    this.name = name;
    this.versionRange = versionRange;
  }
}

export class Extension {
  id: string;
  name: string;
  mainPath: string;
  basePath: string;
  windowType: string;
  width: string;
  height: string;
  minWidth: string;
  minHeight: string;
  maxWidth: string;
  maxHeight: string;
  defaultExtensionDataXml: string;
  specialExtensionDataXml: string;
  requiredRuntimeList: string;
  isAutoVisible: string;
  isPluginExtension: string;

  constructor(
    id: string,
    name: string,
    mainPath: string,
    basePath: string,
    windowType: string,
    width: string,
    height: string,
    minWidth: string,
    minHeight: string,
    maxWidth: string,
    maxHeight: string,
    defaultExtensionDataXml: string,
    specialExtensionDataXml: string,
    requiredRuntimeList: string,
    isAutoVisible: string,
    isPluginExtension: string
  ) {
    this.id = id;
    this.name = name;
    this.mainPath = mainPath;
    this.basePath = basePath;
    this.windowType = windowType;
    this.width = width;
    this.height = height;
    this.minWidth = minWidth;
    this.minHeight = minHeight;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.defaultExtensionDataXml = defaultExtensionDataXml;
    this.specialExtensionDataXml = specialExtensionDataXml;
    this.requiredRuntimeList = requiredRuntimeList;
    this.isAutoVisible = isAutoVisible;
    this.isPluginExtension = isPluginExtension;
  }
}

export class CSEvent {
  type: string;
  scope: string;
  appId: string;
  extensionId: string;

  constructor(
    type: string,
    scope: string,
    appId: string,
    extensionId: string
  ) {
    this.type = type;
    this.scope = scope;
    this.appId = appId;
    this.extensionId = extensionId;
  }
}

export class SystemPath {
  USER_DATA: string;
  COMMON_FILES: string;
  MY_DOCUMENTS: string;
  APPLICATION: string;
  EXTENSION: string;
  HOST_APPLICATION: string;

  constructor() {
    this.USER_DATA = 'userData';
    this.COMMON_FILES = 'commonFiles';
    this.MY_DOCUMENTS = 'myDocuments';
    this.APPLICATION = 'application';
    this.EXTENSION = 'extension';
    this.HOST_APPLICATION = 'hostApplication';
  }
}

export class ColorType {
  RGB: string;
  GRADIENT: string;
  NONE: string;

  constructor() {
    this.RGB = 'rgb';
    this.GRADIENT = 'gradient';
    this.NONE = 'none';
  }
}

export class RGBColor {
  red: string;
  green: string;
  blue: string;
  alpha: string;

  constructor(
    red: string,
    green: string,
    blue: string,
    alpha: string
  ) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
}

export class Direction {
  x: string;
  y: string;

  constructor(x: string, y: string) {
    this.x = x;
    this.y = y;
  }
}

export class GradientStop {
  offset: string;
  rgbColor: string;

  constructor(offset: string, rgbColor: string) {
    this.offset = offset;
    this.rgbColor = rgbColor;
  }
}

export class GradientColor {
  type: string;
  direction: string;
  numStops: string;
  arrGradientStop: string;

  constructor(
    type: string,
    direction: string,
    numStops: string,
    arrGradientStop: string
  ) {
    this.type = type;
    this.direction = direction;
    this.numStops = numStops;
    this.arrGradientStop = arrGradientStop;
  }
}

export class UIColor {
  type: string;
  antialiasLevel: string;
  color: string;

  constructor(
    type: string,
    antialiasLevel: string,
    color: string
  ) {
    this.type = type;
    this.antialiasLevel = antialiasLevel;
    this.color = color;
  }
}

export class AppSkinInfo {
  baseFontFamily: string;
  baseFontSize: string;
  appBarBackgroundColor: string;
  panelBackgroundColor: string;
  appBarBackgroundColorSRGB: string;
  panelBackgroundColorSRGB: string;
  systemHighlightColor: string;

  constructor(
    baseFontFamily: string,
    baseFontSize: string,
    appBarBackgroundColor: string,
    panelBackgroundColor: string,
    appBarBackgroundColorSRGB: string,
    panelBackgroundColorSRGB: string,
    systemHighlightColor: string
  ) {
    this.baseFontFamily = baseFontFamily;
    this.baseFontSize = baseFontSize;
    this.appBarBackgroundColor = appBarBackgroundColor;
    this.panelBackgroundColor = panelBackgroundColor;
    this.appBarBackgroundColorSRGB = appBarBackgroundColorSRGB;
    this.panelBackgroundColorSRGB = panelBackgroundColorSRGB;
    this.systemHighlightColor = systemHighlightColor;
  }
}

export class HostEnvironment {
  appName: string;
  appVersion: string;
  appLocale: string;
  appUILocale: string;
  appId: string;
  isAppOnline: string;
  appSkinInfo: string;

  constructor(
    appName: string,
    appVersion: string,
    appLocale: string,
    appUILocale: string,
    appId: string,
    isAppOnline: string,
    appSkinInfo: string
  ) {
    this.appName = appName;
    this.appVersion = appVersion;
    this.appLocale = appLocale;
    this.appUILocale = appUILocale;
    this.appId = appId;
    this.isAppOnline = isAppOnline;
    this.appSkinInfo = appSkinInfo;
  }
}

export class HostCapabilities {
  EXTENDED_PANEL_MENU: string;
  EXTENDED_PANEL_ICONS: string;
  DELEGATE_APE_ENGINE: string;
  SUPPORT_HTML_EXTENSIONS: string;
  DISABLE_FLASH_EXTENSIONS: string;

  constructor(
    EXTENDED_PANEL_MENU: string,
    EXTENDED_PANEL_ICONS: string,
    DELEGATE_APE_ENGINE: string,
    SUPPORT_HTML_EXTENSIONS: string,
    DISABLE_FLASH_EXTENSIONS: string
  ) {
    this.EXTENDED_PANEL_MENU = EXTENDED_PANEL_MENU;
    this.EXTENDED_PANEL_ICONS = EXTENDED_PANEL_ICONS;
    this.DELEGATE_APE_ENGINE = DELEGATE_APE_ENGINE;
    this.SUPPORT_HTML_EXTENSIONS = SUPPORT_HTML_EXTENSIONS;
    this.DISABLE_FLASH_EXTENSIONS = DISABLE_FLASH_EXTENSIONS;
  }
}

export class ApiVersion {
  major: string;
  minor: string;
  micro: string;

  constructor(
    major: string,
    minor: string,
    micro: string
  ) {
    this.major = major;
    this.minor = minor;
    this.micro = micro;
  }
}

export class MenuItemStatus {
  menuItemLabel: string;
  enabled: string;
  checked: string;

  constructor(
    menuItemLabel: string,
    enabled: string,
    checked: string
  ) {
    this.menuItemLabel = menuItemLabel;
    this.enabled = enabled;
    this.checked = checked;
  }
}

export class ContextMenuItemStatus {
  menuItemID: string;
  enabled: string;
  checked: string;

  constructor(
    menuItemID: string,
    enabled: string,
    checked: string) {
    this.menuItemID = menuItemID;
    this.enabled = enabled;
    this.checked = checked;
  }
}

export class CSInterface {
  THEME_COLOR_CHANGED_EVENT: string = 'com.adobe.csxs.events.ThemeColorChanged';
  hostEnvironment: any;
  getMonitorScaleFactor: any;

  constructor() {
    this.hostEnvironment = window.__adobe_cep__.getHostEnvironment ? JSON.parse(window.__adobe_cep__.getHostEnvironment()) : null;

    if(navigator.appVersion.toLowerCase().indexOf("windows") >= 0) {
      this.getMonitorScaleFactor = () => window.__adobe_cep__.getMonitorScaleFactor();
    }
  }

  getHostEnvironment = () => {
    this.hostEnvironment = JSON.parse(window.__adobe_cep__.getHostEnvironment());
    return this.hostEnvironment;
  };

  closeExtension = () => {
    window.__adobe_cep__.closeExtension();
  };

  getSystemPath = pathType => {
    let path = decodeURI(window.__adobe_cep__.getSystemPath(pathType));
    let OSVersion = this.getOSInformation();
    if (OSVersion.indexOf('Windows') >= 0) {
      path = path.replace('file:///', '');
    } else if (OSVersion.indexOf('Mac') >= 0) {
      path = path.replace('file://', '');
    }
    return path;
  };

  evalScript = (script, callback) => {
    if (callback === null || callback === undefined) {
      callback = function (result) {

      };
    }
    window.__adobe_cep__.evalScript(script, callback);
  };

  getApplicationID = () => this.hostEnvironment.appId || '';

  getHostCapabilities = () => JSON.parse(window.__adobe_cep__.getHostCapabilities());

  dispatchEvent = event => {
    if (typeof event.data == 'object') {
      event.data = JSON.stringify(event.data);
    }

    window.__adobe_cep__.dispatchEvent(event);
  };

  addEventListener = (type, listener, obj) => {
    window.__adobe_cep__.addEventListener(type, listener, obj);
  };

  removeEventListener = (type, listener, obj) => {
    window.__adobe_cep__.removeEventListener(type, listener, obj);
  };

  requestOpenExtension = (extensionId, params) => {
    window.__adobe_cep__.requestOpenExtension(extensionId, params);
  };

  getExtensions = extensionIds => {
    let extensionsStr = window.__adobe_cep__.getExtensions(JSON.stringify(extensionIds));
    return JSON.parse(extensionsStr);
  };

  getNetworkPreferences = () => {
    let result = window.__adobe_cep__.getNetworkPreferences();
    return JSON.parse(result);
  };

  initResourceBundle = () => {
    let resourceBundle = JSON.parse(window.__adobe_cep__.initResourceBundle());
    let resElms = document.querySelectorAll('[data-locale]');

    for (let n = 0; n < resElms.length; n++) {
      let resEl = resElms[ n ];

      let resKey = resEl.getAttribute('data-locale');

      if (resKey) {

        for (let key in resourceBundle) {
          if (key.indexOf(resKey) === 0) {
            let resValue = resourceBundle[ key ];
            if (key.length == resKey.length) {
              resEl.innerHTML = resValue;
            }
            else if ('.' == key.charAt(resKey.length)) {
              let attrKey = key.substring(resKey.length + 1);
              resEl[ attrKey ] = resValue;
            }
          }
        }
      }
    }
    return resourceBundle;
  };

  dumpInstallationInfo = () => window.__adobe_cep__.dumpInstallationInfo();

  getOSInformation = () => {
    let userAgent = navigator.userAgent;

    if ((navigator.platform == 'Win32') || (navigator.platform == 'Windows')) {
      let winVersion = 'Windows';
      let winBit = '';
      if (userAgent.indexOf('Windows') > -1) {
        if (userAgent.indexOf('Windows NT 5.0') > -1) {
          winVersion = 'Windows 2000';
        } else if (userAgent.indexOf('Windows NT 5.1') > -1) {
          winVersion = 'Windows XP';
        } else if (userAgent.indexOf('Windows NT 5.2') > -1) {
          winVersion = 'Windows Server 2003';
        } else if (userAgent.indexOf('Windows NT 6.0') > -1) {
          winVersion = 'Windows Vista';
        } else if (userAgent.indexOf('Windows NT 6.1') > -1) {
          winVersion = 'Windows 7';
        } else if (userAgent.indexOf('Windows NT 6.2') > -1) {
          winVersion = 'Windows 8';
        } else if (userAgent.indexOf('Windows NT 6.3') > -1) {
          winVersion = 'Windows 8.1';
        } else if (userAgent.indexOf('Windows NT 10') > -1) {
          winVersion = 'Windows 10';
        }

        if (userAgent.indexOf('WOW64') > -1 || userAgent.indexOf('Win64') > -1) {
          winBit = ' 64-bit';
        } else {
          winBit = ' 32-bit';
        }
      }

      return winVersion + winBit;
    } else if ((navigator.platform == 'MacIntel') || (navigator.platform == 'Macintosh')) {
      let result = 'Mac OS X';

      if (userAgent.indexOf('Mac OS X') > -1) {
        result = userAgent.substring(userAgent.indexOf('Mac OS X'), userAgent.indexOf(')'));
        result = result.replace(/_/g, '.');
      }

      return result;
    }

    return 'Unknown Operation System';
  };

  openURLInDefaultBrowser = url => cep.util.openURLInDefaultBrowser(url);

  getExtensionID = () => window.__adobe_cep__.getExtensionId();

  getScaleFactor = () => window.__adobe_cep__.getScaleFactor();

  setScaleFactorChangedHandler = handler => window.__adobe_cep__.setScaleFactorChangedHandler(handler);

  getCurrentApiVersion = () => JSON.parse(window.__adobe_cep__.getCurrentApiVersion());

  setPanelFlyoutMenu = menu => {
    if ('string' != typeof menu) {
      return;
    }

    window.__adobe_cep__.invokeSync('setPanelFlyoutMenu', menu);
  };

  updatePanelMenuItem = (menuItemLabel: string, enabled: string, checked: string) => {
    ret = false;
    if (this.getHostCapabilities().EXTENDED_PANEL_MENU) {
      let itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);
      ret = window.__adobe_cep__.invokeSync('updatePanelMenuItem', JSON.stringify(itemStatus));
    }
    return ret;
  };

  setContextMenu = function (menu, callback) {
    if ('string' != typeof menu) {
      return;
    }

    window.__adobe_cep__.invokeAsync('setContextMenu', menu, callback);
  };

  setContextMenuByJSON = (menu, callback) => {
    if ('string' != typeof menu) {
      return;
    }

    window.__adobe_cep__.invokeAsync('setContextMenuByJSON', menu, callback);
  };

  updateContextMenuItem = (menuItemID: string, enabled: string, checked: string) => {
    let itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
    ret = window.__adobe_cep__.invokeSync('updateContextMenuItem', JSON.stringify(itemStatus));
  };

  isWindowVisible = () => window.__adobe_cep__.invokeSync('isWindowVisible', '');

  resizeContent = (width, height) => {
    window.__adobe_cep__.resizeContent(width, height);
  };

  registerInvalidCertificateCallback = (callback) => window.__adobe_cep__.registerInvalidCertificateCallback(callback);

  registerKeyEventsInterest = keyEventsInterest => window.__adobe_cep__.registerKeyEventsInterest(keyEventsInterest);

  setWindowTitle = title => {
    window.__adobe_cep__.invokeSync('setWindowTitle', title);
  };

  getWindowTitle = () => window.__adobe_cep__.invokeSync('getWindowTitle', '');
}
