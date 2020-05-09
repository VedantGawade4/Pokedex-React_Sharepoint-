var PokeEntry = /** @class */ (function () {
    function PokeEntry() {
    }
    return PokeEntry;
}());
var PokeEntryFactory = /** @class */ (function () {
    function PokeEntryFactory() {
    }
    PokeEntryFactory.GetPokeEntryObj = function (entry) {
        var pokeEntry = new PokeEntry();
        pokeEntry.Title = entry.Title;
        pokeEntry.PId = entry.PId;
        pokeEntry.PName = entry.PName;
        pokeEntry.Picture = entry.Picture.Url;
        return pokeEntry;
    };
    PokeEntryFactory.GetDefaultPokeEntryObj = function () {
        var pokeEntry = new PokeEntry();
        pokeEntry.Title = "P";
        pokeEntry.PId = 0;
        pokeEntry.PName = "Pokeball";
        pokeEntry.Picture = "https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png";
        return pokeEntry;
    };
    return PokeEntryFactory;
}());
export { PokeEntryFactory };
//# sourceMappingURL=PokeEntry.js.map