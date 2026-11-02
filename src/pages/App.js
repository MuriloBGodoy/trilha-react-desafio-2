import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchRepo = async () => {
    const trimmed = currentRepo.trim();
    if (!trimmed) {
      alert('Digite o caminho do repositório (ex: facebook/react)');
      return;
    }

    // Se o usuário colar a URL completa, extrai apenas 'usuario/repositorio'
    const cleanRepo = trimmed
      .replace(/^https?:\/\/github\.com\//i, '')
      .replace(/\/$/, '');

    setLoading(true);

    try {
      const { data } = await api.get(`repos/${cleanRepo}`);

      if (data && data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (isExist) {
          alert('Repositório já adicionado na lista.');
          return;
        }

        setRepos(prev => [data, ...prev]);
        setCurrentRepo('');
      } else {
        alert('Repositório não encontrado.');
      }
    } catch (error) {
      alert('Repositório não encontrado no GitHub.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchRepo();
    }
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="usuario/repositorio (ex: facebook/react)"
      />
      <Button onClick={handleSearchRepo} disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar'}
      </Button>

      {repos.length === 0 && (
        <p style={{ color: '#FAFAFA80', marginTop: '20px' }}>
          Nenhum repositório adicionado. Digite acima e clique em Buscar!
        </p>
      )}

      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          repo={repo}
          handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  );
}

export default App;
