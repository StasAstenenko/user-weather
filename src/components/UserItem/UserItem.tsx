import type { User } from '../../types/userTypes';
import Weather from '../Weather/Weather';
import styles from './UserItem.module.css';

const UserItem = ({ email, gender, location, name, picture }: User) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.userHeader}>
        <img
          src={picture.medium}
          alt={name.first}
          className={styles.userImage}
        />
        <div className={styles.userDetails}>
          <h2>
            {name.first} {name.last}
          </h2>
          <p>{email}</p>
          <p>{gender}</p>
          <p>
            {location.city}, {location.country}
          </p>
        </div>
      </div>

      <div className={styles.weatherBlock}>
        <Weather
          lat={+location.coordinates.latitude}
          lon={+location.coordinates.longitude}
        />
      </div>
    </div>
  );
};

export default UserItem;
