import {IPokeEntry} from '../interfaces/IPokeEntry';
import { number } from 'prop-types';

class PokeEntry implements IPokeEntry
{
    Title : string;
    PId: number;
    PName: string;
    Picture: any;
}

export class PokeEntryFactory
{
    public static GetPokeEntryObj(entry: IPokeEntry) : IPokeEntry
    {
       let pokeEntry = new PokeEntry();
       pokeEntry.Title = entry.Title;
       pokeEntry.PId = entry.PId;
       pokeEntry.PName = entry.PName;
       pokeEntry.Picture = entry.Picture.Url;

       return pokeEntry;
    }

    public static GetDefaultPokeEntryObj() : IPokeEntry
    {
    let pokeEntry = new PokeEntry();
        pokeEntry.Title = "P";
        pokeEntry.PId = 0;
        pokeEntry.PName = "Pokeball";
        pokeEntry.Picture = "https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png";

        return pokeEntry;
    }
}

