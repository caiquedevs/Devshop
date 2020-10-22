import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CartPage from '../pages/CartPage';
import FavoritesPage from '../pages/FavoritesPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import SearchPage from '../pages/SearchPage';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/category/:category" component={HomePage} />
      <Route exact path="/search/:param" component={SearchPage} />

      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/favorites" component={FavoritesPage} />
      <Route
        exact
        path="/category/:category/:idproduct"
        component={ProductPage}
      />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
