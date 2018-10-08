import * as React from 'react';
import './index.scss';

export class Playing extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="playing">
                <div className="playing-column">
                    <button className="playing-button">
                        <span className="icon-step-backward"/>
                    </button>
                    <button className="playing-button large">
                        <span className="icon-play"/>
                    </button>
                    <button className="playing-button">
                        <span className="icon-step-forward"/>
                    </button>
                    <button className="playing-button">
                        <span className="icon-list"/>
                    </button>
                </div>
                <div className="playing-column">
                    <div>
                        <span className="playing-descriptor">Now playing:</span>
                        <h2 className="playing-title">Lorem ipsum dolor sit amet</h2>
                        <h3 className="playing-subtitle">Artist Name</h3>
                    </div>
                </div>
            </div>
        );
    }

}