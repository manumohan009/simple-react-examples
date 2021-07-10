import React, {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

const IndexPage = lazy(()=>import('./app-index'));
const CountAppPage = lazy(()=>import('./count-app/index'));
const CakeContainer = lazy(()=>import('./cake-app/cake-container.component'));
const UserAPI = lazy(()=>import('./user-api-app/user-api.component'));
const UserApiThunk = lazy(()=>import('./user-api-app/user-api-thunk.component'));
const PureAndMemoParent = lazy(()=>import('./pure-and-memo/PureAndMemoParent'));
const RefAppParent = lazy(()=>import('./ref-app/ref-app-parent'));
const LoadableParentApp = lazy(()=>import('./loadable-app/loadable-parent'));
const RegularExpressions = lazy(()=>import('./regular-expressions/regular-expressions'));
const BindingThisParent = lazy(()=>import('./binding-this/binding-this-parent'));
const GraphQLParent = lazy(()=>import('./graphql-app/graphql-parent'));


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={IndexPage}/>
            <Route path='/cake' component={CakeContainer}/>
            <Route path='/count' component={CountAppPage}/>
            <Route path='/user' component={UserAPI}/>
            <Route path='/user-thunk' component={UserApiThunk}/>
            <Route path='/pure-and-memo' component={PureAndMemoParent}/>
            <Route path='/ref-demo' component={RefAppParent}/>
            <Route path='/loadable' component={LoadableParentApp}/>
            <Route path='/regular-expressions' component={RegularExpressions}/>
            <Route path='/binding-this' component={BindingThisParent}/>
            <Route path='/graphql' component={GraphQLParent}/>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
