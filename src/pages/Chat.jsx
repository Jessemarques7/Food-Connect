import { useState } from "react";
import ChatFriend from "../components/ChatFriend";
import FriendsList from "../components/FriendsList";
import SideMenu from "../components/SideMenu";
import styles from "./Chat.module.scss";

function Chat() {
  const [selectedFriend, setSelectedFriend] = useState("118836");

  return (
    <main className={styles.main}>
      <SideMenu />
      <section className={styles.container}>
        <FriendsList
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
        <ChatFriend />
      </section>
    </main>
  );
}

export default Chat;
