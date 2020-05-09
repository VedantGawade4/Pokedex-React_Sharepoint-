import * as React from 'react';
import styles from './Webpart1.module.scss';
import { IWebpart1Props } from './IWebpart1Props';
import { escape } from '@microsoft/sp-lodash-subset';
import {SearchBar} from './SearchBar/SearchBar';
import {PokemonCard} from './PokemonCard/PokemonCard';
import {EditBoard} from './EditBoard/EditBoard';
import {MessageBox} from './MessageBox/MessageBox';
import { IPokeEntry } from '../interfaces/IPokeEntry';
import { PokeEntryFactory } from '../models/PokeEntry';
import {EditAction} from '../../../enums/EditActionEnum';

export default class Webpart1 extends React.Component<IWebpart1Props, {}> {
  constructor(props)
  {
    super(props);
    this.OnSearch = this.OnSearch.bind(this);
    this.OnEdit = this.OnEdit.bind(this);
    this.OnPokemonCardEdit = this.OnPokemonCardEdit.bind(this);
    this.LogAction = this.LogAction.bind(this);
  }

  state = {
    SearchedPokemonExists : false,
    SearchedPokemon : PokeEntryFactory.GetDefaultPokeEntryObj(),
    EditedSearchedPokemon : PokeEntryFactory.GetDefaultPokeEntryObj(),
    EditBoardEnable : false,
    ActionMessage : ""
  }

  public render(): React.ReactElement<IWebpart1Props> {
    return (
      <div>
        <PokemonCard searchedPokemonExists = {this.state.SearchedPokemonExists} pokemon = {this.state.SearchedPokemon} onPokemonCardEdit = {this.OnPokemonCardEdit}/>
        <SearchBar  webContext = {this.props.webContext} onSearch = {this.OnSearch} logAction = {this.LogAction}/>
        <EditBoard webContext = {this.props.webContext} editBoardEnable = {this.state.EditBoardEnable} searchedPokemonExists = {this.state.SearchedPokemonExists} pokemon = {this.state.EditedSearchedPokemon} onEdit = {this.OnEdit} logAction = {this.LogAction}/>
        <MessageBox message = {this.state.ActionMessage}/>

        <br/>
        <a href="https://slb001.sharepoint.com/sites/SPOTraining/Lists/VedsTestList/AllItems.aspx">Sharepoint list for refrence</a>
      </div>
    );
  }

  public OnSearch(searchedPokemonExists : boolean, searchedPokemon : IPokeEntry)
  {
      this.setState(
        {
          SearchedPokemonExists : searchedPokemonExists,
          SearchedPokemon : searchedPokemon,
          EditedSearchedPokemon : searchedPokemon,
          EditBoardEnable : searchedPokemon.PId !== PokeEntryFactory.GetDefaultPokeEntryObj().PId
        }
      );
  }

  public OnEdit(action : EditAction)
  {
    switch(action)
    {
      case EditAction.Update :
        break;
      case EditAction.Delete :
          this.setState(
            {
              SearchedPokemonExists : false,
              SearchedPokemon : PokeEntryFactory.GetDefaultPokeEntryObj(),
              EditedSearchedPokemon : PokeEntryFactory.GetDefaultPokeEntryObj(),
              EditBoardEnable : false
            }
          );
          break;
      case EditAction.Save :
          this.setState(
            {
              SearchedPokemonExists : true
            }
          );
          break
    }
  }

  public OnPokemonCardEdit(entry : IPokeEntry)
  {
    this.setState({
      EditedSearchedPokemon : entry
    });
  }

  public LogAction(message : string)
  {
      this.setState(
        {
          ActionMessage : message
        }
      );
  }
}

