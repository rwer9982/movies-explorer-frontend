import React from 'react';
import LoggedHeader from '../LoggedHeader/LoggedHeader';
import ProfilePage from './ProfilePage/ProfilePage';
//import Header from '../header/Header';

function Profile({ openMenu }) {

  return (
    <section className="profile">
      <LoggedHeader openMenu={openMenu}></LoggedHeader>
      <ProfilePage></ProfilePage>
    </section>
  );
}

export default Profile;