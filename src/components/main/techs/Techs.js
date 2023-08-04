import React from 'react';

function Techs({ }) {

    return (
      <section className="techs">
        <h2 className="techs__header">Технологии</h2>
        <h3 className="techs__second-header">7 технологий</h3>
        <p className="techs__second-header-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__content">
            <p className="techs__description">HTML</p>
            <p className="techs__description">CSS</p>
            <p className="techs__description">JS</p>
            <p className="techs__description">React</p>
            <p className="techs__description">Git</p>
            <p className="techs__description">Express.js</p>
            <p className="techs__description">mongoDB</p>
        </div>

      </section>
    );
  }
  
  export default Techs;