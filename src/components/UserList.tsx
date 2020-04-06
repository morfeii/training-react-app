import React, { FC } from 'react';
import { UserType } from '../interfaces';
import { UserItem } from './UserItem';


interface Props {
  users: UserType[];
}

export const UserList: FC<Props> = ({ users }) => (
  <table className="table">
    <thead className="table__head">
      <tr className="table__row">
        <th className="table__heading">
          No
        </th>
        <th className="table__heading">
          Name
        </th>
        <th className="table__heading">
          Email
        </th>
        <th className="table__heading">
          Company
        </th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => <UserItem key={user.id} user={user} />)}
    </tbody>
  </table>
);
