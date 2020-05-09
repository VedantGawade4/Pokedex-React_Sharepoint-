import * as React from 'react';
import styles from './PokemonCard.module.scss';
import { PokeEntryFactory } from '../../models/PokeEntry';
import { IPokeEntry } from '../../interfaces/IPokeEntry';

export class PokemonCard extends React.Component<any>
{
  public constructor(props) {
    super(props);
    this.OnPokemonNameChange = this.OnPokemonNameChange.bind(this);
    }
 
  OnPokemonNameChange(name : string)
  {
    let editedPokemon : IPokeEntry = this.props.pokemon;
    editedPokemon.PName = name;
    this.props.onPokemonCardEdit(editedPokemon);
  }

  render()
  {
    let nameEditEnable = this.props.searchedPokemonExists && this.props.pokemon.PId !== PokeEntryFactory.GetDefaultPokeEntryObj().PId;

    return (
      <div style={{backgroundColor : "#F8F8F8", padding : "10px"}}>
        <p>Component 1</p> 
        <img 
        src={this.props.pokemon.Picture}
        alt="Pokemon Image"
        width = "100px"
        height = "100px"/>

        <div style={{height: "30px"}}>
          <h3 style={{float: "left", marginTop: "0px", marginRight: "10px"}} ><b>Name :</b></h3> 
          <input onChange={event => this.OnPokemonNameChange(event.target.value)} style={{fontSize: "14px"}} value={this.props.pokemon.PName} disabled={!nameEditEnable}/>
        </div>
    </div>
    );
  }
}
