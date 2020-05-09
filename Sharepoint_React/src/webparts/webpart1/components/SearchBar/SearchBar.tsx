import React from 'react';
import styles from './SearchBar.module.scss';
import { SharepointService } from '../../services/SharepointService';
import { PokeApiService } from '../../services/PokeApiService';
import { PokeEntryFactory } from '../../models/PokeEntry';

export class SearchBar extends React.Component<any>
{
  public constructor(props) {
    super(props);
    }
 
  state = {searchText : ''};
  webContext = this.props.webContext;
  sharepointServiceInstance = SharepointService.GetInstance(this.webContext);

  render() 
  {
    return <div style={{clear: "left", backgroundColor : "#F0F0F0", padding : "10px"}}>
          <p>Component 2</p>
          <input 
            type="text"
            placeholder = "Enter id to search a Pokèmon"
            className = {styles.searchBar}
            value = {this.state.searchText}
            onChange = {event => this.handleSearchTextChange(event.target.value)}/>

          <button
            className = {styles.searchButton}
            onClick = {() => this.handleSearchClick()} disabled = {isNaN(+this.state.searchText) || this.state.searchText.trim() === ""}>
                  Search
          </button>
          <p style={{fontSize : "10px"}}>Try ids ranging between 1 - 1000</p>
        </div>;
  }

  private handleSearchTextChange(text : string)
  {
    this.setState({
      searchText : text
    });
  }

  private handleSearchClick()
  {
    if(isNaN(+this.state.searchText) || this.state.searchText.trim() === "")
    {
      return;
    }
    //First search in sharepoint list
     this.sharepointServiceInstance.GetEntry(+this.state.searchText).then(
      (response)=>{
        if(response != null )//Found in sharepoint list
        {
          //Call parent OnSearch to notify other sibling components
          this.props.onSearch(true,response);

          //log action
          this.props.logAction("Pokemon with Id " + response.PId + " was found in Sharepoint list. You can edit the pokemon name using the edit board.");
        }
        else//Not found in sharepoint list, get from pokeApi
        {
          PokeApiService.GetPokemon(+this.state.searchText).then(
            (response)=>{
              //Call parent OnSearchto notify other sibling components
              this.props.onSearch(false,response);
  
              //log action
              this.props.logAction("Pokemon with Id " + response.PId + " was NOT found in Sharepoint list. Therfore was fetched from an external API. Click SAVE to save to Sharepoint list.");
            },
            (error : any)=>{
              //Call parent OnSearch to notify other sibling components
              this.props.onSearch(false,PokeEntryFactory.GetDefaultPokeEntryObj());

              //log action
              this.props.logAction("Search for Id " + this.state.searchText + " failed." );
            }
          );
        }
      }
    );

    
  }

  componentDidMount() {
    /* ... */
  }
}
