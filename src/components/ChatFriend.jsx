import styles from "./ChatFriend.module.scss";

function ChatFriend() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <input
            className={styles.input}
            //   type="text"
            //   placeholder={placeholder}
            //   onChange={handleInputChange}
            //   onKeyDown={handleKeyDown}
            //   value={inputValue}
          />
          <div className={styles.button}>
            <button
            //   onClick={handleClick}
            >
              <img
                alt="Icone de envia de mensagens"
                src={"src/assets/send-icon.svg"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatFriend;
