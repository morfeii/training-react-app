import React, { FC } from 'react';
import { UserType } from '../interfaces';


interface Props {
  user: UserType;
}

export const UserItem: FC<Props> = ({ user }) => {
  const {
    id,
    name,
    email,
    company,
  } = user;

  return (
    <tr className="table__row">
      <th className="table__cell">
        {id}
      </th>
      <th className="table__cell">
        {name}
      </th>
      <th className="table__cell">
        {email}
      </th>
      <th className="table__cell">
        {company.name}
      </th>
    </tr>
  );
};
