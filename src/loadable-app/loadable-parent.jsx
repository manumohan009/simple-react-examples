import React, { Component } from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = () => {
    return (
        <div>Loading Loadable Component...</div>
    )
}

const DynamicChild = Loadable({
    loader: () => import('./loadable-child'),
    loading: LoadingComponent,
});



class LoadableParentApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loadLibrary: false
        }

    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <DynamicChild loadLibrary={this.state.loadLibrary} />
            </>
        )
    }
}

export default LoadableParentApp;
