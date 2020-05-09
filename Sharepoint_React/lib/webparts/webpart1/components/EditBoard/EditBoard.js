import * as React from 'react';
import styles from './EditBoard.module.scss';
import { SharepointService } from '../../services/SharepointService';
import { EditAction } from '../../../../enums/EditActionEnum';
export function EditBoard(props) {
    var Save = function () {
        var sharepointServiceInstance = SharepointService.GetInstance(props.webContext);
        sharepointServiceInstance.AddEntry(props.pokemon).then(function (result) {
            if (result) {
                //call parent method to notify sibling components
                props.onEdit(EditAction.Save);
                //log action
                props.logAction("Pokemon with Id " + props.pokemon.PId + " was saved to Sharepoint list successfully.");
            }
            else {
                //log action
                props.logAction("Pokemon with Id " + props.pokemon.PId + " failed to save.");
            }
        });
    };
    var Delete = function () {
        var sharepointServiceInstance = SharepointService.GetInstance(props.webContext);
        sharepointServiceInstance.DeleteEntry(props.pokemon.PId).then(function (result) {
            if (result) {
                //call parent method to notify sibling components
                props.onEdit(EditAction.Delete);
                //log action
                props.logAction("Pokemon with Id " + props.pokemon.PId + " was deleted from Sharepoint list successfully.");
            }
            else {
                //log action
                props.logAction("Pokemon with Id " + props.pokemon.PId + " failed to delete.");
            }
        });
    };
    var Update = function () {
        var sharepointServiceInstance = SharepointService.GetInstance(props.webContext);
        sharepointServiceInstance.UpdateEntry(props.pokemon).then(function (result) {
            if (result) {
                //call parent method to notify sibling components
                props.onEdit(EditAction.Update);
                //log action
                props.logAction("Pokemon with Id " + props.pokemon.PId + " was updated in Sharepoint list successfully.");
            }
            else {
                //log action
                props.logAction("Pokemon with Id " + props.pokemon.PId + " failed to update.");
            }
        });
    };
    return (React.createElement("div", { style: { backgroundColor: "#E0E0E0", padding: "10px" } },
        React.createElement("p", null, "Component 3"),
        React.createElement("button", { className: styles.crudButton, disabled: !props.searchedPokemonExists || !props.editBoardEnable, onClick: Update }, "Update"),
        React.createElement("button", { className: styles.crudButton, disabled: !props.searchedPokemonExists || !props.editBoardEnable, onClick: Delete }, "Delete"),
        React.createElement("button", { className: styles.crudButton, disabled: props.searchedPokemonExists || !props.editBoardEnable, onClick: Save }, "Save")));
}
//# sourceMappingURL=EditBoard.js.map