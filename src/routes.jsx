import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import getBrowserWindow from "./shared/lib/getBrowserWindow";
import {seekUrlHash} from "./shared/lib/seekUrlHash";

import SummaryViewPage from './pages/summaryView/SummaryViewPage';
import ImportsViewPage from './pages/importsView/ImportsViewPage';
import DeveloperViewPage from './pages/developerView/DeveloperViewPage';

/* when route changes, we want to:
1. in spa, deep links from url (#) don't work because content is loading and thus doesn't exist to link to
   at time url changes.  seekHash is a somewhat dirty way of solving this issue
2, when there's no hash, we want to make sure we scroll to top because user considers herself on a "new page"
 */

function handleEnter(){
    const hash = getBrowserWindow().location.hash;
    // if hash is bigger than 50, probably not a deep link but some kind of data
    if (hash.length > 0 && hash.length < 50) {
        seekUrlHash(hash.replace("#",""));
    } else {
        $(document).scrollTop(0);
    }
  }
  
  function lazyLoadComponent(loader, loadingCallback) {
    return (location, cb) => {
        loader(module => {
            if (cb) cb(null, module.default);
            if (loadingCallback) loadingCallback();
        });
    }
  }
  
  export const makeRoutes = (routing) => {
    return (
      <Switch>
        <Route exact path='/summary' component={SummaryViewPage}/>
        <Route exact path='/imports' component={ImportsViewPage}/>
        <Route exact path='/developer' component={DeveloperViewPage}/>
      </Switch>
    )
  }
export default makeRoutes;