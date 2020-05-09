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
import React from 'react';
import styles from './SearchBar.module.scss';
import { SharepointService } from '../../services/SharepointService';
import { PokeApiService } from '../../services/PokeApiService';
import { PokeEntryFactory } from '../../models/PokeEntry';
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { searchText: '' };
        _this.webContext = _this.props.webContext;
        _this.sharepointServiceInstance = SharepointService.GetInstance(_this.webContext);
        return _this;
    }
    SearchBar.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { style: { clear: "left", backgroundColor: "#F0F0F0", padding: "10px" } },
            React.createElement("p", null, "Component 2"),
            React.createElement("input", { type: "text", placeholder: "Enter id to search a Pok\u00E8mon", className: styles.searchBar, value: this.state.searchText, onChange: function (event) { return _this.handleSearchTextChange(event.target.value); } }),
            React.createElement("button", { className: styles.searchButton, onClick: function () { return _this.handleSearchClick(); }, disabled: isNaN(+this.state.searchText) || this.state.searchText.trim() === "" }, "Search"),
            React.createElement("p", { style: { fontSize: "10px" } }, "Try ids ranging between 1 - 1000"));
    };
    SearchBar.prototype.handleSearchTextChange = function (text) {
        this.setState({
            searchText: text
        });
    };
    SearchBar.prototype.handleSearchClick = function () {
        var _this = this;
        if (isNaN(+this.state.searchText) || this.state.searchText.trim() === "") {
            return;
        }
        //First search in sharepoint list
        this.sharepointServiceInstance.GetEntry(+this.state.searchText).then(function (response) {
            if (response != null) //Found in sharepoint list
             {
                //Call parent OnSearch to notify other sibling components
                _this.props.onSearch(true, response);
                //log action
                _this.props.logAction("Pokemon with Id " + response.PId + " was found in Sharepoint list. You can edit the pokemon name using the edit board.");
            }
            else //Not found in sharepoint list, get from pokeApi
             {
                PokeApiService.GetPokemon(+_this.state.searchText).then(function (response) {
                    //Call parent OnSearchto notify other sibling components
                    _this.props.onSearch(false, response);
                    //log action
                    _this.props.logAction("Pokemon with Id " + response.PId + " was NOT found in Sharepoint list. Therfore was fetched from an external API. Click SAVE to save to Sharepoint list.");
                }, function (error) {
                    //Call parent OnSearch to notify other sibling components
                    _this.props.onSearch(false, PokeEntryFactory.GetDefaultPokeEntryObj());
                    //log action
                    _this.props.logAction("Search for Id " + _this.state.searchText + " failed.");
                });
            }
        });
    };
    SearchBar.prototype.componentDidMount = function () {
        /* ... */
    };
    return SearchBar;
}(React.Component));
export { SearchBar };
//# sourceMappingURL=SearchBar.js.map