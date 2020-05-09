import * as React from 'react';
import styles from './MessageBox.module.scss';

export function MessageBox(props)
{
  return (
    <div style={{backgroundColor : "#D8D8D8", padding : "10px"}}>
      <p>Component 4</p>
      <div className={styles.messageBox}>
        <p>
          {props.message === "" ? "Action message will appear here . .. ..." : props.message}
        </p>
      </div>
    </div>
  );

}