import axios from 'axios';
import {IPokeEntry} from '../interfaces/IPokeEntry';
import {PokeEntryFactory} from '../models/PokeEntry';

import { number } from 'prop-types';

export class PokeApiService
{
    public static GetPokemon(id : number) : Promise<IPokeEntry>
    {
        let url = "https://pokeapi.co/api/v2/pokemon/" + id.toString();
        return axios.get(url).then(
            (response) => 
            {
                let result = PokeEntryFactory.GetDefaultPokeEntryObj();
                result.Title = "P" + id.toString();
                result.PId = id;
                result.PName = response.data.species.name;
                result.Picture = response.data.sprites.front_default;

                return result;
            },
            (error : any)=>{
                throw new Error("Pokemon not found !"); 
            }

        ) as Promise<IPokeEntry>;
    }
}