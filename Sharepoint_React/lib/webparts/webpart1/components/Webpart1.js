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
import { SearchBar } from './SearchBar/SearchBar';
import { PokemonCard } from './PokemonCard/PokemonCard';
import { EditBoard } from './EditBoard/EditBoard';
import { MessageBox } from './MessageBox/MessageBox';
import { PokeEntryFactory } from '../models/PokeEntry';
import { EditAction } from '../../../enums/EditActionEnum';
var Webpart1 = /** @class */ (function (_super) {
    __extends(Webpart1, _super);
    function Webpart1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            SearchedPokemonExists: false,
            SearchedPokemon: PokeEntryFactory.GetDefaultPokeEntryObj(),
            EditedSearchedPokemon: PokeEntryFactory.GetDefaultPokeEntryObj(),
            EditBoardEnable: false,
            ActionMessage: ""
        };
        _this.OnSearch = _this.OnSearch.bind(_this);
        _this.OnEdit = _this.OnEdit.bind(_this);
        _this.OnPokemonCardEdit = _this.OnPokemonCardEdit.bind(_this);
        _this.LogAction = _this.LogAction.bind(_this);
        return _this;
    }
    Webpart1.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(PokemonCard, { searchedPokemonExists: this.state.SearchedPokemonExists, pokemon: this.state.SearchedPokemon, onPokemonCardEdit: this.OnPokemonCardEdit }),
            React.createElement(SearchBar, { webContext: this.props.webContext, onSearch: this.OnSearch, logAction: this.LogAction }),
            React.createElement(EditBoard, { webContext: this.props.webContext, editBoardEnable: this.state.EditBoardEnable, searchedPokemonExists: this.state.SearchedPokemonExists, pokemon: this.state.EditedSearchedPokemon, onEdit: this.OnEdit, logAction: this.LogAction }),
            React.createElement(MessageBox, { message: this.state.ActionMessage }),
            React.createElement("br", null),
            React.createElement("a", { href: "https://slb001.sharepoint.com/sites/SPOTraining/Lists/VedsTestList/AllItems.aspx" }, "Sharepoint list for refrence")));
    };
    Webpart1.prototype.OnSearch = function (searchedPokemonExists, searchedPokemon) {
        this.setState({
            SearchedPokemonExists: searchedPokemonExists,
            SearchedPokemon: searchedPokemon,
            EditedSearchedPokemon: searchedPokemon,
            EditBoardEnable: searchedPokemon.PId !== PokeEntryFactory.GetDefaultPokeEntryObj().PId
        });
    };
    Webpart1.prototype.OnEdit = function (action) {
        switch (action) {
            case EditAction.Update:
                break;
            case EditAction.Delete:
                this.setState({
                    SearchedPokemonExists: false,
                    SearchedPokemon: PokeEntryFactory.GetDefaultPokeEntryObj(),
                    EditedSearchedPokemon: PokeEntryFactory.GetDefaultPokeEntryObj(),
                    EditBoardEnable: false
                });
                break;
            case EditAction.Save:
                this.setState({
                    SearchedPokemonExists: true
                });
                break;
        }
    };
    Webpart1.prototype.OnPokemonCardEdit = function (entry) {
        this.setState({
            EditedSearchedPokemon: entry
        });
    };
    Webpart1.prototype.LogAction = function (message) {
        this.setState({
            ActionMessage: message
        });
    };
    return Webpart1;
}(React.Component));
export default Webpart1;
//# sourceMappingURL=Webpart1.js.map