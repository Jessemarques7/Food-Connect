import Friend from "./Friend";
import styles from "./FriendsList.module.scss";

function FriendsList() {
  const initialFriends = [
    {
      id: 118836,
      name: "João da Padaria dos Amigos",
      image: "https://i.pravatar.cc/48?u=118516",
    },
    {
      id: 933372,
      name: "Amanda's Restaurant",
      image: "https://i.pravatar.cc/48?u=499784",
    },
    {
      id: 499476,
      name: "Marcos Doces",
      image: "https://i.pravatar.cc/48?u=499321",
    },
    {
      id: 115736,
      name: "Stephanie Bolos",
      image: "https://i.pravatar.cc/48?u=118769",
    },
    {
      id: 926372,
      name: "Sarah Massas",
      image: "https://i.pravatar.cc/48?u=933372",
    },
    {
      id: 484476,
      name: "Anthony do Norte",
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
