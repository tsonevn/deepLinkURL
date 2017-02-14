/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as app from 'application';
var application = require("application");





application.on(app.resumeEvent, function (args) {
    if (args.android) {
        console.log("Activity: " + args.android);
    }
});


function getParams(url){
    console.log(url);
    var resulturl:string = (<any>NSString)(url).toString();;
    if(resulturl.substring(0,5)=="appgo"){
       console.log(getParameterByName("test", resulturl));
    }

}

function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return results[2].replace(/\+/g, " ");
}

class newIOSApplication extends NSObject implements UIApplicationDelegate{
static ObjCProtocols = [UIApplicationDelegate];
        applicationHandleOpenURL(app, url): boolean {
            // console.log(url.substring(0, 5));
            // if(url.substring(0, 5);)
            getParams(url);
            return true;
        }
}
application.ios.delegate = newIOSApplication;

app.start({ moduleName: 'main-page' });