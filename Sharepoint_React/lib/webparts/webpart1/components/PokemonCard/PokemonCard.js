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
import { PokeEntryFactory } from '../../models/PokeEntry';
var PokemonCard = /** @class */ (function (_super) {
    __extends(PokemonCard, _super);
    function PokemonCard(props) {
        var _this = _super.call(this, props) || this;
        _this.OnPokemonNameChange = _this.OnPokemonNameChange.bind(_this);
        return _this;
    }
    PokemonCard.prototype.OnPokemonNameChange = function (name) {
        var editedPokemon = this.props.pokemon;
        editedPokemon.PName = name;
        this.props.onPokemonCardEdit(editedPokemon);
    };
    PokemonCard.prototype.render = function () {
        var _this = this;
        var nameEditEnable = this.props.searchedPokemonExists && this.props.pokemon.PId !== PokeEntryFactory.GetDefaultPokeEntryObj().PId;
        return (React.createElement("div", { style: { backgroundColor: "#F8F8F8", padding: "10px" } },
            React.createElement("p", null, "Component 1"),
            React.createElement("img", { src: this.props.pokemon.Picture, alt: "Pokemon Image", width: "100px", height: "100px" }),
            React.createElement("div", { style: { height: "30px" } },
                React.createElement("h3", { style: { float: "left", marginTop: "0px", marginRight: "10px" } },
                    React.createElement("b", null, "Name :")),
                React.createElement("input", { onChange: function (event) { return _this.OnPokemonNameChange(event.target.value); }, style: { fontSize: "14px" }, value: this.props.pokemon.PName, disabled: !nameEditEnable }))));
    };
    return PokemonCard;
}(React.Component));
export { PokemonCard };
//# sourceMappingURL=PokemonCard.js.map