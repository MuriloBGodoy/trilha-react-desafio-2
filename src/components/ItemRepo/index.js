import React from 'react';

import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = (e) => {
    e.preventDefault();
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      {repo.description && (
        <span className="description">{repo.description}</span>
      )}
      <div className="actions">
        <a href={repo.html_url} rel="noreferrer" target="_blank" className="ver">
          Ver repositório
        </a>
        <a href="#remove" onClick={handleRemove} className="remover">
          Remover
        </a>
      </div>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
