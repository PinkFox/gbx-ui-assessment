import * as React from 'react';
import { Album } from '../Album/index';
import './index.scss';

export type AlbumsProps = {
    amount: number;
}

export class Albums extends React.Component<AlbumsProps> {

    public render(): JSX.Element {
        return (
            <div className="albums">
                {this.renderAlbums()}
            </div>
        );
    }

    private renderAlbums(): JSX.Element[] {

        let output: JSX.Element[] = [];

        for (let i = 0; i < this.props.amount; i++) {
            output.push(
                <div 
                    className="albums-column"
                    key={i}
                >
                    <Album />
                </div>
            );
        }

        return output;

    }

}