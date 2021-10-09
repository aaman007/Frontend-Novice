import React from 'react';
import { useState } from 'react';

import InviteeList from './components/InviteeList';

import "./App.css";
import InviteForm from './components/InviteForm';

export interface IUser {
  name: string;
  avatar: string;
  age: number;
  note?: string;
}

export type OnInviteFunc = (user: IUser) => void;

interface IState {
  users: IUser[]
}


function App() {
  const [users, setUsers] = useState<IState["users"]>([]);

  const onInvite: OnInviteFunc = (user: IUser) => {
    setUsers([
      ...users, user
    ])
  }

  return (
    <div className="container">
      <h1> Invited Users </h1>
      <InviteeList users={users} />
      <InviteForm onInvite={onInvite} />
    </div>
  );
}

export default App;
