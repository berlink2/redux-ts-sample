import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositores } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositores(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.currentTarget.value)} />
        <button>Search</button>
      </form>
      <div>
        {!error && loading
          ? 'loading...'
          : data.map((item) => {
              return <li key={item}>{item}</li>;
            })}
        {error && 'error happened'}
      </div>
    </div>
  );
};

export default RepositoriesList;
