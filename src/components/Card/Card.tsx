import React from 'react';
import { classNames } from '../../utils/classNames';
import './Card.scss';

interface Props {
      imgUrl?: string;
      count?: string;
      timeLimit: number;
      level: number;
      isSmall?: boolean;
      flip: boolean;
      onStart: () => void
      onFinish: () => void
}
export const Card: React.FC<Props> = (props) => {
      const flipClasses = classNames({
            'card-flip': true,
            flipped: props.flip,
      })
      const containerClasses = classNames({
            'card-container': true,
            big: !!props.isSmall,
      })
      return (
            <div className={containerClasses}>
                  <div className={flipClasses}>
                        <div className="card-front">
                              <div className="card-body">
                                    <div>
                                          <h1>NIVEL {props.level}</h1>
                                          <p>{props.timeLimit} minutos para completar el reto</p>
                                    </div>
                              </div>
                              <div className="card-footer">
                                    <button
                                     className="card-front-button"
                                     onClick={props.onStart}
                                    > 
                                          START 
                                    </button>
                              </div>
                        </div>
                        <div className="card-back">
                              <div className="card-body">
                                    <img src={props.imgUrl} alt=""/>
                                    <p>TIEMPO RESTANTE</p>
                                    <p>{props.count}</p>
                              </div>
                              <div className="card-footer">
                                    <button
                                     className="card-back-button"
                                     onClick={props.onFinish}
                                    > 
                                          FINISH
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}