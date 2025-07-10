import { useEffect, useState } from 'react';
import type { User } from '../../types/userTypes';
import { getUsers } from '../../api/userApi';
import UserItem from '../UserItem/UserItem';

const UserList = () => {
  const [users, setUser] = useState<User[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getUsers(10);

        setUser(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <UserItem
                email={user.email}
                gender={user.gender}
                location={user.location}
                name={user.name}
                picture={user.picture}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserList;
