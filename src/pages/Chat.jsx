import ChatFriend from "../components/ChatFriend";
import FriendsList from "../components/FriendsList";
import SideMenu from "../components/SideMenu";
import styles from "./Chat.module.scss";

function Chat() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <section className={styles.container}>
        <FriendsList />
        <ChatFriend />
      </section>
    </main>
  );
}

export default Chat;
