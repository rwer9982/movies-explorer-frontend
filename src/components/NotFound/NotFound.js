import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NotFound({ }) {

  const navigate = useNavigate();

  return (
    <section className="not-found">
        <h2 className="not-found__header">404</h2>
        <p className="not-found__description">Страница не найдена</p>
        <Link onClick={() => navigate(-1)} className="not-found__button">Назад</Link>
    </section>
  );
}

export default NotFound;