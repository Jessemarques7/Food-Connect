import Friend from "./Friend";
import styles from "./FriendsList.module.scss";

function FriendsList() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118516",
    },
    {
      id: 933372,
      name: "Amanda",
      image: "https://i.pravatar.cc/48?u=499784",
    },
    {
      id: 499476,
      name: "Mark",
      image: "https://i.pravatar.cc/48?u=499321",
    },
    {
      id: 115736,
      name: "Stephanie",
      image: "https://i.pravatar.cc/48?u=118769",
    },
    {
      id: 926372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
    },
    {
      id: 484476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
    },
  ];

  return (
    <div className={styles.list}>
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}

export default FriendsList;
