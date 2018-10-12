export function CSXSWindowType() {
  this._PANEL = "Panel";
  this._MODELESS = "Modeless";
  this._MODAL_DIALOG = "ModalDialog";
}

export const EvalScript_ErrMessage = "EvalScript error.";

export function Version(major, minor, micro, special) {
  this.major = major;
  this.minor = minor;
  this.micro = micro;
  this.special = special;
  this.MAX_NUM = 999999999;
}


export function VersionBound(version, inclusive) {
  this.version = version;
  this.inclusive = inclusive;
}

export function VersionRange(lowerBound, upperBound) {
  this.lowerBound = lowerBound;
  this.upperBound = upperBound;
}

export function Runtime(name, versionRange) {
  this.name = name;
  this.versionRange = versionRange;
}

export function Extension(id, name, mainPath, basePath, windowType, width, height, minWidth, minHeight, maxWidth, maxHeight,
                   defaultExtensionDataXml, specialExtensionDataXml, requiredRuntimeList, isAutoVisible, isPluginExtension) {
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

export function CSEvent(type, scope, appId, extensionId) {
  this.type = type;
  this.scope = scope;
  this.appId = appId;
  this.extensionId = extensionId;
  this.prototype.data = "";
}


export function SystemPath() {
  this.USER_DATA = "userData";
  this.COMMON_FILES = "commonFiles";
  this.MY_DOCUMENTS = "myDocuments";
  this.APPLICATION = "application";
  this.EXTENSION = "extension";
  this.HOST_APPLICATION = "hostApplication";
}

export function ColorType() {
  this.RGB = "rgb";
  this.GRADIENT = "gradient";
  this.NONE = "none";
}

export function RGBColor(red, green, blue, alpha) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.alpha = alpha;
}

export function Direction(x, y) {
  this.x = x;
  this.y = y;
}

export function GradientStop(offset, rgbColor) {
  this.offset = offset;
  this.rgbColor = rgbColor;
}

export function GradientColor(type, direction, numStops, arrGradientStop) {
  this.type = type;
  this.direction = direction;
  this.numStops = numStops;
  this.arrGradientStop = arrGradientStop;
}

export function UIColor(type, antialiasLevel, color) {
  this.type = type;
  this.antialiasLevel = antialiasLevel;
  this.color = color;
}

export function AppSkinInfo(baseFontFamily, baseFontSize, appBarBackgroundColor, panelBackgroundColor, appBarBackgroundColorSRGB, panelBackgroundColorSRGB, systemHighlightColor) {
  this.baseFontFamily = baseFontFamily;
  this.baseFontSize = baseFontSize;
  this.appBarBackgroundColor = appBarBackgroundColor;
  this.panelBackgroundColor = panelBackgroundColor;
  this.appBarBackgroundColorSRGB = appBarBackgroundColorSRGB;
  this.panelBackgroundColorSRGB = panelBackgroundColorSRGB;
  this.systemHighlightColor = systemHighlightColor;
}

export function HostEnvironment(appName, appVersion, appLocale, appUILocale, appId, isAppOnline, appSkinInfo) {
  this.appName = appName;
  this.appVersion = appVersion;
  this.appLocale = appLocale;
  this.appUILocale = appUILocale;
  this.appId = appId;
  this.isAppOnline = isAppOnline;
  this.appSkinInfo = appSkinInfo;
}

export function HostCapabilities(EXTENDED_PANEL_MENU, EXTENDED_PANEL_ICONS, DELEGATE_APE_ENGINE, SUPPORT_HTML_EXTENSIONS, DISABLE_FLASH_EXTENSIONS) {
  this.EXTENDED_PANEL_MENU = EXTENDED_PANEL_MENU;
  this.EXTENDED_PANEL_ICONS = EXTENDED_PANEL_ICONS;
  this.DELEGATE_APE_ENGINE = DELEGATE_APE_ENGINE;
  this.SUPPORT_HTML_EXTENSIONS = SUPPORT_HTML_EXTENSIONS;
  this.DISABLE_FLASH_EXTENSIONS = DISABLE_FLASH_EXTENSIONS;
}

export function ApiVersion(major, minor, micro) {
  this.major = major;
  this.minor = minor;
  this.micro = micro;
}

export function MenuItemStatus(menuItemLabel, enabled, checked) {
  this.menuItemLabel = menuItemLabel;
  this.enabled = enabled;
  this.checked = checked;
}

export function ContextMenuItemStatus(menuItemID, enabled, checked) {
  this.menuItemID = menuItemID;
  this.enabled = enabled;
  this.checked = checked;
}

export function CSInterface(appWin) {
  const cep = {};
  let ret = false;

  this.THEME_COLOR_CHANGED_EVENT = "com.adobe.csxs.events.ThemeColorChanged";
  this.prototype.hostEnvironment = appWin ? JSON.parse(appWin.getHostEnvironment()) : null;
  this.prototype.getHostEnvironment = function () {
    this.hostEnvironment = JSON.parse(appWin.getHostEnvironment());
    return this.hostEnvironment;
  };
  this.prototype.closeExtension = function () {
    appWin.closeExtension();
  };
  this.prototype.getSystemPath = function (pathType) {
    let path = decodeURI(appWin.getSystemPath(pathType));
    let OSVersion = this.getOSInformation();
    if (OSVersion.indexOf("Windows") >= 0) {
      path = path.replace("file:///", "");
    }
    else if (OSVersion.indexOf("Mac") >= 0) {
      path = path.replace("file://", "");
    }
    return path;
  };

  this.prototype.evalScript = function (script, callback) {
    if (callback === null || callback === undefined) {
      callback = function (result) {
      };
    }
    appWin.evalScript(script, callback);
  };

  this.prototype.getApplicationID = function () {
    let appId = this.hostEnvironment.appId;
    return appId;
  };

  this.prototype.getHostCapabilities = function () {
    let hostCapabilities = JSON.parse(appWin.getHostCapabilities());
    return hostCapabilities;
  };

  this.prototype.dispatchEvent = function (event) {
    if (typeof event.data == "object") {
      event.data = JSON.stringify(event.data);
    }

    appWin.dispatchEvent(event);
  };

  this.prototype.addEventListener = function (type, listener, obj) {
    appWin.addEventListener(type, listener, obj);
  };

  this.prototype.removeEventListener = function (type, listener, obj) {
    appWin.removeEventListener(type, listener, obj);
  };

  this.prototype.requestOpenExtension = function (extensionId, params) {
    appWin.requestOpenExtension(extensionId, params);
  };

  this.prototype.getExtensions = function (extensionIds) {
    let extensionIdsStr = JSON.stringify(extensionIds);
    let extensionsStr = appWin.getExtensions(extensionIdsStr);

    let extensions = JSON.parse(extensionsStr);
    return extensions;
  };

  this.prototype.getNetworkPreferences = function () {
    let result = appWin.getNetworkPreferences();
    let networkPre = JSON.parse(result);

    return networkPre;
  };

  this.prototype.initResourceBundle = function () {
    let resourceBundle = JSON.parse(appWin.initResourceBundle());
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

  this.prototype.dumpInstallationInfo = function () {
    return appWin.dumpInstallationInfo();
  };

  this.prototype.getOSInformation = function () {
    let userAgent = navigator.userAgent;

    if ((navigator.platform == "Win32") || (navigator.platform == "Windows")) {
      let winVersion = "Windows";
      let winBit = "";
      if (userAgent.indexOf("Windows") > -1) {
        if (userAgent.indexOf("Windows NT 5.0") > -1) {
          winVersion = "Windows 2000";
        }
        else if (userAgent.indexOf("Windows NT 5.1") > -1) {
          winVersion = "Windows XP";
        }
        else if (userAgent.indexOf("Windows NT 5.2") > -1) {
          winVersion = "Windows Server 2003";
        }
        else if (userAgent.indexOf("Windows NT 6.0") > -1) {
          winVersion = "Windows Vista";
        }
        else if (userAgent.indexOf("Windows NT 6.1") > -1) {
          winVersion = "Windows 7";
        }
        else if (userAgent.indexOf("Windows NT 6.2") > -1) {
          winVersion = "Windows 8";
        }
        else if (userAgent.indexOf("Windows NT 6.3") > -1) {
          winVersion = "Windows 8.1";
        }
        else if (userAgent.indexOf("Windows NT 10") > -1) {
          winVersion = "Windows 10";
        }

        if (userAgent.indexOf("WOW64") > -1 || userAgent.indexOf("Win64") > -1) {
          winBit = " 64-bit";
        }
        else {
          winBit = " 32-bit";
        }
      }

      return winVersion + winBit;
    }
    else if ((navigator.platform == "MacIntel") || (navigator.platform == "Macintosh")) {
      let result = "Mac OS X";

      if (userAgent.indexOf("Mac OS X") > -1) {
        result = userAgent.substring(userAgent.indexOf("Mac OS X"), userAgent.indexOf(")"));
        result = result.replace(/_/g, ".");
      }

      return result;
    }

    return "Unknown Operation System";
  };

  this.prototype.openURLInDefaultBrowser = function (url) {
    //return cep.util.openURLInDefaultBrowser(url);
  };

  this.prototype.getExtensionID = function () {
    return appWin.getExtensionId();
  };

  this.prototype.getScaleFactor = function () {
    return appWin.getScaleFactor();
  };

  this.prototype.setScaleFactorChangedHandler = function (handler) {
    appWin.setScaleFactorChangedHandler(handler);
  };

  this.prototype.getCurrentApiVersion = function () {
    return JSON.parse(appWin.getCurrentApiVersion());
  };

  this.prototype.setPanelFlyoutMenu = function (menu) {
    if ("string" != typeof menu) {
      return;
    }

    appWin.invokeSync("setPanelFlyoutMenu", menu);
  };

  this.prototype.updatePanelMenuItem = function (menuItemLabel, enabled, checked) {
    ret = false;
    if (this.getHostCapabilities().EXTENDED_PANEL_MENU) {
      let itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);
      ret = appWin.invokeSync("updatePanelMenuItem", JSON.stringify(itemStatus));
    }
    return ret;
  };

  this.prototype.setContextMenu = function (menu, callback) {
    if ("string" != typeof menu) {
      return;
    }

    appWin.invokeAsync("setContextMenu", menu, callback);
  };

  this.prototype.setContextMenuByJSON = function (menu, callback) {
    if ("string" != typeof menu) {
      return;
    }

    appWin.invokeAsync("setContextMenuByJSON", menu, callback);
  };

  this.prototype.updateContextMenuItem = function (menuItemID, enabled, checked) {
    let itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
    ret = appWin.invokeSync("updateContextMenuItem", JSON.stringify(itemStatus));
  };

  this.prototype.isWindowVisible = function () {
    return appWin.invokeSync("isWindowVisible", "");
  };

  this.prototype.resizeContent = function (width, height) {
    appWin.resizeContent(width, height);
  };

  this.prototype.registerInvalidCertificateCallback = function (callback) {
    return appWin.registerInvalidCertificateCallback(callback);
  };

  this.prototype.registerKeyEventsInterest = function (keyEventsInterest) {
    return appWin.registerKeyEventsInterest(keyEventsInterest);
  };

  this.prototype.setWindowTitle = function (title) {
    appWin.invokeSync("setWindowTitle", title);
  };

  this.prototype.getWindowTitle = function () {
    return appWin.invokeSync("getWindowTitle", "");
  };

}
