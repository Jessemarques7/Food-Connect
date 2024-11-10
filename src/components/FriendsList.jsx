import Friend from "./Friend";
import styles from "./FriendsList.module.scss";

function FriendsList() {
  const initialFriends = [
    {
      id: 118836,
<<<<<<< HEAD
      name: "Clark",
=======
      name: "João da Padaria dos Amigos",
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
      image: "https://i.pravatar.cc/48?u=118516",
    },
    {
      id: 933372,
<<<<<<< HEAD
      name: "Amanda",
=======
      name: "Amanda's Restaurant",
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
      image: "https://i.pravatar.cc/48?u=499784",
    },
    {
      id: 499476,
<<<<<<< HEAD
      name: "Mark",
=======
      name: "Marcos Doces",
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
      image: "https://i.pravatar.cc/48?u=499321",
    },
    {
      id: 115736,
<<<<<<< HEAD
      name: "Stephanie",
=======
      name: "Stephanie Bolos",
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
      image: "https://i.pravatar.cc/48?u=118769",
    },
    {
      id: 926372,
<<<<<<< HEAD
      name: "Sarah",
=======
      name: "Sarah Massas",
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
      image: "https://i.pravatar.cc/48?u=933372",
    },
    {
      id: 484476,
<<<<<<< HEAD
      name: "Anthony",
=======
      name: "Anthony do Norte",
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
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
