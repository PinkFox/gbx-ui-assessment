import * as React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header/index';
import { Tabs } from './components/Tabs/index';
import { Footer } from './components/Footer/index';
import { Playing } from './components/Playing/index';
import { Albums } from './components/Albums/index';
import { Songs } from './components/Songs/index';
import 'normalize.css';
import './app.scss';

type AppState = {
    activeTab: string
};

class App extends React.Component<any, AppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            activeTab: 'albums'
        };

    }

    public render(): JSX.Element {
        return (
            <div className="app">
                <div className="app-container">
                    <div className="app-top">
                        <Header />
                        <Tabs
                            active={this.state.activeTab}
                            clickHandler={(selected) => this.handleTabClick(selected)}
                        />
                    </div>
                    <div className="app-content">
                        {this.renderContent()}
                    </div>
                    <div className="app-bottom">
                        <Playing />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }

    private handleTabClick(selected: string): void {
        if (selected === 'albums' || selected === 'songs') {
            this.setState({
                activeTab: selected
            });
        }
    }

    private renderContent(): JSX.Element {
        if (this.state.activeTab === 'albums') {
            return <Albums amount={13}/>
        } else {
            return <Songs amount={17}/>
        }
    }

}

render(
    <App />,
    document.getElementById('root')
);