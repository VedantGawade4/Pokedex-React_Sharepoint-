var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'Webpart1WebPartStrings';
import Webpart1 from './components/Webpart1';
var Webpart1WebPart = /** @class */ (function (_super) {
    __extends(Webpart1WebPart, _super);
    function Webpart1WebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webpart1WebPart.prototype.render = function () {
        var element = React.createElement(Webpart1, {
            description: this.properties.description,
            webContext: this.context //Context required for sharepoint service calls
        });
        ReactDom.render(element, this.domElement);
    };
    Webpart1WebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(Webpart1WebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    Webpart1WebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return Webpart1WebPart;
}(BaseClientSideWebPart));
export default Webpart1WebPart;
//# sourceMappingURL=Webpart1WebPart.js.map