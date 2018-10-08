import * as React from 'react';
import './index.scss';

export class Footer extends React.Component {

    public render(): JSX.Element {
        return (
            <nav className="footer">
                <button className="footer-tab">
                    <span className="footer-tab-icon icon-ticket"/>
                </button>
                <button className="footer-tab">
                    <span className="footer-tab-icon icon-tv"/>
                </button>
                <button className="footer-tab is-active">
                    <span className="footer-tab-icon icon-music"/>
                </button>
                <button className="footer-tab">
                    <span className="footer-tab-icon icon-shopping-basket"/>
                </button>
                <button className="footer-tab">
                    <span className="footer-tab-icon icon-search"/>
                </button>
            </nav>
        );
    }

}