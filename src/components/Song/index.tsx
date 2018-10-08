import * as React from 'react';
import './index.scss';

export class Song extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="song">
                <h2 className="song-title">Lorem ipsum dolor sit amet</h2>
                <h3 className="song-subtitle">Artist Name</h3>
                <div className="song-actions">
                    <button className="song-action">
                        <span className="icon-play"/>
                    </button>
                    <button className="song-action">
                        <span className="icon-ellipsis-v"/>
                    </button>
                </div>
                <a className="song-link" href="#"/>
            </div>
        );
    }

}