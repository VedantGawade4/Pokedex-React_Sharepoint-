import {IPokeEntry} from '../interfaces/IPokeEntry';
import pnp, { ItemAddResult, TypedHash, ItemUpdateResult, Web } from 'sp-pnp-js';
import { PokeEntryFactory } from '../models/PokeEntry';
import { any } from 'prop-types';
import { List } from 'lodash';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export class SharepointService
{
    private WebContext : WebPartContext;
    private PnpWeb : Web;
    private PokeEntryListTitle : string = "VedsTestList";
    private PIdFilter = "PId eq ";
    private static Instance : SharepointService = null;

    private constructor(webContext : WebPartContext)
    {
       this.WebContext = webContext;
       this.PnpWeb = new Web(this.WebContext.pageContext.web.absoluteUrl);
    }
    
    public static GetInstance(webContext : WebPartContext) : SharepointService
    {
       if(this.Instance === null)
       {
        this.Instance = new SharepointService(webContext);
       }
        return this.Instance;
    }

    public GetEntry(id : number) : Promise<IPokeEntry>
    {
        return this.PnpWeb.lists.getByTitle(this.PokeEntryListTitle).items.filter(this.PIdFilter + id.toString()).get().then(
            (response)=>{
                let result = response.map(item => PokeEntryFactory.GetPokeEntryObj(item));
                if(result == null || result.length == 0)
                {
                    return null;
                }
                return result[0];
            }
        ) as Promise<IPokeEntry>;
    }

    public  AddEntry(entry : IPokeEntry) : Promise<boolean>
    {
        return this.PnpWeb.lists.getByTitle(this.PokeEntryListTitle).items.add(
            {
                "Title" : `${entry.Title}`,
                "PId" : `${entry.PId}`,
                "PName" : `${entry.PName}`,
                "Picture" : {"Description" : `${entry.Picture}`,  "Url" : `${entry.Picture}`}
            }
        ).then(
            (result : ItemAddResult)=>{
                //Entry added successfully
                return true;
            },
            (error : any)=>{
                //Error adding entry
                return false;
            }
        ) as Promise<boolean>;
    }

    public DeleteEntry(id : number) : Promise<boolean>
    {
        return this.PnpWeb.lists.getByTitle(this.PokeEntryListTitle).items.filter(this.PIdFilter + id.toString()).get().then(
            async (response)=>{
                if(response == null || response.length == 0)
                {
                    return false;
                }
           
                let itemId = response[0].ID;
                try{
                await this.PnpWeb.lists.getByTitle(this.PokeEntryListTitle).items.getById(itemId).delete();
                return true;
                }
                catch
                {
                    return false;
                }
            },
            (error : any)=>{
                return false;
            }) as Promise<boolean>;
    }

    public UpdateEntry(entry : IPokeEntry) : Promise<boolean>
    {
        return this.PnpWeb.lists.getByTitle(this.PokeEntryListTitle).items.filter(this.PIdFilter + entry.PId.toString()).get().then(
            (response)=>{
                if(response == null || response.length == 0)
                {
                    return false;
                }

                let itemId = response[0].ID;
                return this.PnpWeb.lists.getByTitle(this.PokeEntryListTitle).items.getById(itemId).update(
                    {
                        "PName" : `${entry.PName}`
                    }
                ).then(
                    (result : ItemUpdateResult)=>{
                        return true;
                    },
                    (error : any)=>{
                        return false;
                    }
                );
            }) as Promise<boolean>;
    }
}