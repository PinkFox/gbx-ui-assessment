import * as React from 'react';
import { Song } from '../Song/index';
import './index.scss';

export type SongsProps = {
    amount: number;
}

export class Songs extends React.Component<SongsProps> {

    public render(): JSX.Element {
        return (
            <div className="songs">
                {this.renderSongs()}
            </div>
        );
    }

    private renderSongs(): JSX.Element[] {

        let output: JSX.Element[] = [];

        for (let i = 0; i < this.props.amount; i++) {
            output.push(
                <div 
                    className="songs-column"
                    key={i}
                >
                    <Song />
                </div>
            );
        }

        return output;

    }

}