import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {useLazyLoadQuery} from "react-relay";
import {AppRepositoryNameQuery} from "./__generated__/AppRepositoryNameQuery.graphql";

const RepositoryNameQuery = graphql`
    query AppRepositoryNameQuery {
        repository(owner: "facebook", name: "relay") {
            name
        }
    }
`;

function App() {
    const data = useLazyLoadQuery<AppRepositoryNameQuery>(RepositoryNameQuery, {}, {})
    return (
        <div className="App">
            <header className="App-header">
                <p>{data.repository?.name}</p>
            </header>
        </div>
    );
}

export default App;
