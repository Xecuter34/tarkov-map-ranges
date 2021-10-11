import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import IDebug from '../../interfaces/IDebug';

interface IDebugComponent {
  state: IDebug;
}

const Debug = ({
  state,
  ...props
}:any) => {
  return (
    <div className='debug-window'>
      <div className='debug-refresh'>
        {/* <FontAwesomeIcon icon={faSync} /> */}
      </div>
      <div className='debug-header'>
        Debug
      </div>
      <div className='debug-info'>
        <ul>
          {Object.keys(state).map((key:string) => {
            switch (key) {
              case 'currentRanges':
                return (
                  <>
                    <li>
                      <span>Ranges:</span>
                      <ul>
                        {Object.keys(state[key]).map((subKey:string) => {
                          return (
                            <li>{subKey}: <b>{state[key][subKey]}</b></li>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              case 'dispatch':
                return;
              default:
                return (
                  <li>{key}: <b>{state[key]}</b></li>
                );
            };
          })}
        </ul>
      </div>
    </div>
  );
};

export default Debug;