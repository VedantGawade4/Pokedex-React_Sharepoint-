import * as React from 'react';
import styles from './EditBoard.module.scss';
import { SharepointService } from '../../services/SharepointService';
import {EditAction} from '../../../../enums/EditActionEnum';

export function EditBoard(props)
{
  const Save = ()=>{
    let sharepointServiceInstance = SharepointService.GetInstance(props.webContext);
    sharepointServiceInstance.AddEntry(props.pokemon).then(
        (result : boolean)=>{
          if(result)
          {
            //call parent method to notify sibling components
            props.onEdit(EditAction.Save);

            //log action
            props.logAction("Pokemon with Id " + props.pokemon.PId + " was saved to Sharepoint list successfully.");
          }
          else
          {
             //log action
             props.logAction("Pokemon with Id " + props.pokemon.PId + " failed to save.");
          }
        }
      );
  };

  const Delete = ()=>{
    let sharepointServiceInstance = SharepointService.GetInstance(props.webContext);
    sharepointServiceInstance.DeleteEntry(props.pokemon.PId).then(
      (result : boolean)=>{
        if(result)
        {
          //call parent method to notify sibling components
          props.onEdit(EditAction.Delete);

          //log action
          props.logAction("Pokemon with Id " + props.pokemon.PId + " was deleted from Sharepoint list successfully.");
        }
        else
        {
          //log action
          props.logAction("Pokemon with Id " + props.pokemon.PId + " failed to delete.");
        }
      }
    );
  }

  const Update = ()=>{
    let sharepointServiceInstance = SharepointService.GetInstance(props.webContext);
    sharepointServiceInstance.UpdateEntry(props.pokemon).then(
      (result : boolean)=>{
        if(result)
        {
          //call parent method to notify sibling components
          props.onEdit(EditAction.Update);

          //log action
          props.logAction("Pokemon with Id " + props.pokemon.PId + " was updated in Sharepoint list successfully.");
        }
        else
        {
          //log action
          props.logAction("Pokemon with Id " + props.pokemon.PId + " failed to update.");
        }
      }
    );
  }

  return (
    <div style={{backgroundColor : "#E0E0E0", padding : "10px"}}>
      <p>Component 3</p>
      <button className={styles.crudButton} disabled = {!props.searchedPokemonExists || !props.editBoardEnable} onClick = {Update}>
        Update
      </button>

      <button className={styles.crudButton} disabled = {!props.searchedPokemonExists || !props.editBoardEnable} onClick = {Delete}>
        Delete
      </button>

      <button className={styles.crudButton} disabled = {props.searchedPokemonExists || !props.editBoardEnable} onClick = {Save}>
        Save 
      </button>
    </div>
  );
}



