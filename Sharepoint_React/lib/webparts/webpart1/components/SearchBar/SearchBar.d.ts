import React from 'react';
import { SharepointService } from '../../services/SharepointService';
export declare class SearchBar extends React.Component<any> {
    constructor(props: any);
    state: {
        searchText: string;
    };
    webContext: any;
    sharepointServiceInstance: SharepointService;
    render(): JSX.Element;
    private handleSearchTextChange;
    private handleSearchClick;
    componentDidMount(): void;
}
//# sourceMappingURL=SearchBar.d.ts.map