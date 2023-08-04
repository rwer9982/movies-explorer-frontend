import React from 'react';
import LoggedHeader from '../LoggedHeader/LoggedHeader';
import ProfilePage from './ProfilePage/ProfilePage';

function Profile({ openMenu, userMail, userName, signOut, onSubmit }) {

  return (
    <section className="profile">
      <LoggedHeader openMenu={openMenu}></LoggedHeader>
      <main>
        <ProfilePage userMail={userMail} userName={userName} signOut={signOut} onSubmit={onSubmit}></ProfilePage>
      </main>
    </section>
  );
}

export default Profile;