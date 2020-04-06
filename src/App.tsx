import React, { FC, useState } from 'react';
import { getUsers } from './api/getUsers';
import './App.css';
import { UserList } from './components/UserList';
import { UserType } from './interfaces';

const App: FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const loadUsers = async () => {
    const usersFromServer = await getUsers();

    setUsers(usersFromServer);
  };

  return (
    <div className="app">
      <button
        type="button"
        onClick={loadUsers}
      >
        Load Users
      </button>
      <UserList users={users} />
    </div>
  );
};

export default App;
