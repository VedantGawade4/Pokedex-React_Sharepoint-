import { IPokeEntry } from '../interfaces/IPokeEntry';
import { WebPartContext } from '@microsoft/sp-webpart-base';
export declare class SharepointService {
    private WebContext;
    private PnpWeb;
    private PokeEntryListTitle;
    private PIdFilter;
    private static Instance;
    private constructor();
    static GetInstance(webContext: WebPartContext): SharepointService;
    GetEntry(id: number): Promise<IPokeEntry>;
    AddEntry(entry: IPokeEntry): Promise<boolean>;
    DeleteEntry(id: number): Promise<boolean>;
    UpdateEntry(entry: IPokeEntry): Promise<boolean>;
}
//# sourceMappingURL=SharepointService.d.ts.map