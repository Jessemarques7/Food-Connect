import styles from "./Friend.module.scss";

function Friend({ friend }) {
  return (
    <div className={styles.friend}>
      <img src={friend.image} alt={friend.name} />
      <p>{friend.name}</p>
    </div>
  );
}

export default Friend;
