import axios from 'axios';
import { PokeEntryFactory } from '../models/PokeEntry';
var PokeApiService = /** @class */ (function () {
    function PokeApiService() {
    }
    PokeApiService.GetPokemon = function (id) {
        var url = "https://pokeapi.co/api/v2/pokemon/" + id.toString();
        return axios.get(url).then(function (response) {
            var result = PokeEntryFactory.GetDefaultPokeEntryObj();
            result.Title = "P" + id.toString();
            result.PId = id;
            result.PName = response.data.species.name;
            result.Picture = response.data.sprites.front_default;
            return result;
        }, function (error) {
            throw new Error("Pokemon not found !");
        });
    };
    return PokeApiService;
}());
export { PokeApiService };
//# sourceMappingURL=PokeApiService.js.map