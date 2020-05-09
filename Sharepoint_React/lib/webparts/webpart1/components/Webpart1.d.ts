import * as React from 'react';
import { IWebpart1Props } from './IWebpart1Props';
import { IPokeEntry } from '../interfaces/IPokeEntry';
import { EditAction } from '../../../enums/EditActionEnum';
export default class Webpart1 extends React.Component<IWebpart1Props, {}> {
    constructor(props: any);
    state: {
        SearchedPokemonExists: boolean;
        SearchedPokemon: IPokeEntry;
        EditedSearchedPokemon: IPokeEntry;
        EditBoardEnable: boolean;
        ActionMessage: string;
    };
    render(): React.ReactElement<IWebpart1Props>;
    OnSearch(searchedPokemonExists: boolean, searchedPokemon: IPokeEntry): void;
    OnEdit(action: EditAction): void;
    OnPokemonCardEdit(entry: IPokeEntry): void;
    LogAction(message: string): void;
}
//# sourceMappingURL=Webpart1.d.ts.map