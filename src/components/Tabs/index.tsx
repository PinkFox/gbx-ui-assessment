import * as React from 'react';
import './index.scss';

export type TabsProps = {
    active: string;
    clickHandler: (clicked: string) => void;
};

export class Tabs extends React.Component<TabsProps> {

    public render(): JSX.Element {
        return (
            <div className="tabs">
                <nav className="tab-column left">
                    <button 
                        className={`tab tab-padded${this.props.active === 'albums' ? ' is-active' : ''}`}
                        onClick={() => this.props.clickHandler('albums')}
                    >
                        Albums
                    </button>
                    <button 
                        className={`tab tab-padded${this.props.active === 'songs' ? ' is-active' : ''}`}
                        onClick={() => this.props.clickHandler('songs')}
                    >
                        Songs
                    </button>
                    <button 
                        className={`tab tab-padded${this.props.active === 'playlists' ? ' is-active' : ''}`}
                        onClick={() => this.props.clickHandler('playlists')}
                    >
                        Playlists
                    </button>
                    <button 
                        className={`tab tab-padded${this.props.active === 'favorites' ? ' is-active' : ''}`}
                        onClick={() => this.props.clickHandler('favorites')}
                    >
                        Favorites
                    </button>
                </nav>
                <div className="tab-column">
                    <button className="tab small tab-padded">
                        Sorting Title A-Z
                        <span className="tab-icon icon-sliders"/>
                    </button>
                </div>
            </div>
        );
    }

}