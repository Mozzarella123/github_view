import * as React from 'react';

import RelayEnvironment from "./RelayEnvironment";
import App from "./App";
import {
    RelayEnvironmentProvider,
} from 'react-relay/hooks';
import {Alert} from "@mui/material";
import ErrorBoundary from "./ErrorBoundary";

const {Suspense} = React;

function AppRoot() {

    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={'Loading...'}>
                <ErrorBoundary
                    fallback={error => (
                        <Alert severity="error">{error.message}</Alert>
                    )}>
                    <App/>
                </ErrorBoundary>
            </Suspense>
        </RelayEnvironmentProvider>
    )
}

export default AppRoot;