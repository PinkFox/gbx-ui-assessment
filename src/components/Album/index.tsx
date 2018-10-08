import * as React from 'react';
import './index.scss';

export class Album extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="album">
                <div className="album-art">
                    <div className="album-art-container">
                        <img src="images/default-album.png" alt="Album art for Lorem ipsum dolor sit amet"/>
                    </div>
                </div>
                <div className="album-text">
                    <h2 className="album-title">Lorem ipsum dolor sit amet</h2>
                    <h3 className="album-subtitle">Artist Name</h3>
                    <button className="album-action">
                        <span className="icon-ellipsis-v"/>
                    </button>
                </div>
                <a className="album-link" href="#"/>
            </div>
        );
    }

}