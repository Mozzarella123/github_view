import React from "react";

type State = {error: Error | null};
type Props = React.PropsWithChildren<{
    fallback: React.Component | React.FunctionComponent<Error>;
}>;



class ErrorBoundary extends React.Component<Props, State> {
    state: State = {error: null};

    static getDerivedStateFromError(error: Error): State {
        // Set some state derived from the caught error
        return {error: error};
    }

    render() {
        const {children, fallback} = this.props;
        const {error} = this.state;
        if (error) {
            if (typeof fallback === 'function') {
                return fallback(error)
            }
            return fallback
        }
        return children
    }
}

export default ErrorBoundary;