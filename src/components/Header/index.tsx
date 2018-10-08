import * as React from 'react';
import './index.scss';

export class Header extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="header">
                <div className="header-column left">
                    <a className="header-button header-padded" href="#">
                        <span className="header-icon-large icon-bars" />
                    </a>
                    <h1 className="header-logo icon-playit-logo" title="PlayIt" />
                </div>
                <div className="header-column">
                    <a className="header-button" href="#">
                        Add Media
                        <span className="header-icon-small header-padded icon-plus" />
                    </a>
                </div>
            </div>
        );
    }

}

export default Header;