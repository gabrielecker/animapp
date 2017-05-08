import React from 'react';
import { Route, IndexRoute } from 'react-router';

// APP
import App from './modules/app/components/app';

// HOME
import Home from './modules/home/components/home';

// PET
import PetContainer from './modules/pet/components/pet-container';
import PetList from './components/pet/pet-list';
import PetNew from './components/pet/pet-new';
import PetInfo from './components/pet/pet-info';

// SHELTER
import ShelterList from './components/shelter/shelter-list';
import ShelterNew from './components/shelter/shelter-new';

// ACCOUNT
import AccountContainer from './modules/account/components/account-container';
import AccountLogin from './components/account/account-login';
import AccountSignUp from './components/account/account-signup';

export default(
  <Route Path="/" component={App}>
    <IndexRoute component={App} />

    <Route path="/" component={Home} />

    <Route path="pets" component={PetContainer}>
      <IndexRoute component={PetList} />
      <Route path="new" component={PetNew} />
      <Route path=":id" component={PetInfo} />
    </Route>


    <Route path="shelters" component={ShelterList}>
      <Route path="new" component={ShelterNew} />
    </Route>

    <Route path="account" component={AccountContainer}>
      <Route path="login" component={AccountLogin} />
      <Route path="signup" component={AccountSignUp} />
    </Route>

  </Route>
);
