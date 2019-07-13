import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

const BaseRouter = () =>(
    <div>
        <Route exact path = '/' component = {ArticleList}/>
        <Route exact path = '/:articleID' component = {ArticleDetail}/>
    </div>
);

export default BaseRouter;