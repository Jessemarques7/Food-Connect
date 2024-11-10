import { useState } from "react";
import styles from "./ChatFriend.module.scss";
import { useForm } from "react-hook-form";

function ChatFriend() {
  const { register, handleSubmit } = useForm();

  const [listaMensagens, setListaMensagens] = useState([]);
  //**Apagamos a função cadCliente */
  function inserirMensagem(Mensagens) {
    //**Apagamos o e.preventDefault */
    setListaMensagens([...listaMensagens, Mensagens]);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.mesages}>
          {listaMensagens.map((friend, index) => (
            <div className={styles.mesageBallon} key={index}>
              <div> {friend.mensagem}</div>
            </div>
          ))}
        </div>
        <div className={styles.main}>
          <form onSubmit={handleSubmit(inserirMensagem)}>
            <input
              className={styles.input}
              type="text"
              placeholder="Envie sua mensagem"
              {...register("mensagem")}
            />
          </form>
          <div className={styles.button}>
            <button>
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
