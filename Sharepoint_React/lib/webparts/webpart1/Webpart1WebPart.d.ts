import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IWebpart1WebPartProps {
    description: string;
}
export default class Webpart1WebPart extends BaseClientSideWebPart<IWebpart1WebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=Webpart1WebPart.d.ts.map