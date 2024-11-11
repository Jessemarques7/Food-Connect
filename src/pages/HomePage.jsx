import styles from "./HomePage.module.scss";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay}>
        <header className={styles.cabecalho}>
          <NavLink to={"/"} className={styles.logo}>
            <div>
              <img src="/Logo.png" alt="logo" />
            </div>
          </NavLink>
          <ul className={styles.loginBotoes}>
            <li>
              <NavLink to={"/sobre"} className={styles.sobreContainer}>
                <div className={styles.sobre}>| SOBRE NOS </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/inventario"} className={styles.linkLogin}>
                <button className={styles.doador}>Doador</button>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/catalogo"} className={styles.linkLogin}>
                <button className={styles.receptor}>Receptor</button>
              </NavLink>
            </li>
          </ul>
        </header>
        <div className={styles.bannerPrincipal}>
          <h1 className={styles.titulo}>Food Conect</h1>
          <p className={styles.subtitulo}>
            Se conecte ajudando a combater a fome no Brasil!
          </p>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/WH6P9Safct4"
              title="17 de maio de 2024"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <section className={styles.banner}>
          <div className={styles.bannerConteudo}>
            <h2 className={styles.bannerTitulo}>A fome tem pressa.</h2>
            <p className={styles.bannerTexto}>
              64,2 milhões de brasileiros estão em situação de insegurança
              alimentar.
            </p>
            <p className={styles.bannerPesquisa}>
              Fonte: Pesquisa Nacional por Amostra de Domicílios (PNAD)
              Contínua, IBGE
            </p>
            <NavLink to={"/inventario"} className={styles.linkLogin}>
              <button className={styles.bannerBotao}>
                Nos ajude a combater a fome
              </button>
            </NavLink>
          </div>
          <img
            src="/src/assets/main.jpeg"
            alt="imagem de frutas"
            className={styles.bannerImg}
          />
        </section>
        <section className={styles.pilar}>
          <h3 className={styles.pilarTitulo}>Nossos 3 pilares!</h3>
          <p>
            O trabalho de combate a fome realizado pela Food Connect é baseado
            em 3 pilares fundamentais: <br />
            Conectar pessoas, aproveitar melhor os recursos disponíveis e
            compreender o problema.
          </p>
          <ul className={styles.pilarLista}>
            <li className={styles.lista}>
              <img src="/src/assets/conexao.jpg" alt="conexão" />
              <h4 className={styles.listaTitulo}>Conexão</h4>
              <p>
                Conectamos aqueles que querem ajudar com instituições que
                precisam de apoio.
              </p>
            </li>
            <li className={styles.lista}>
              <img src="/src/assets/educacao.jpg" alt="educação nutricional" />
              <h4 className={styles.listaTitulo}>Educação Nutricional</h4>
              <p>
                Conhecimento para o máximo aproveitamento nutricional dos
                alimentos doados.
              </p>
            </li>
            <li className={styles.lista}>
              <img src="/src/assets/concientizacao.jpg" alt="concientização" />
              <h4 className={styles.listaTitulo}>Concientização</h4>
              <p>
                O Brasil que desperdiça alimentos precisa conhecer o Brasil que
                passa fome.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
