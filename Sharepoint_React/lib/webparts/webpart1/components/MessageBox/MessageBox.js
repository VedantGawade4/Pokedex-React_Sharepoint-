import * as React from 'react';
import styles from './MessageBox.module.scss';
export function MessageBox(props) {
    return (React.createElement("div", { style: { backgroundColor: "#D8D8D8", padding: "10px" } },
        React.createElement("p", null, "Component 4"),
        React.createElement("div", { className: styles.messageBox },
            React.createElement("p", null, props.message === "" ? "Action message will appear here . .. ..." : props.message))));
}
//# sourceMappingURL=MessageBox.js.map