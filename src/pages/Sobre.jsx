import SideMenu from "../components/SideMenu";
import styles from "./Sobre.module.scss";

function Sobre() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <div className={styles.container}>
        <div className={styles.containerInfo}>
          <h2 className={styles.titulo}>Missão</h2>
          <p className={styles.paragrafoInfo}>
            Nossa missão é reduzir a insegurança alimentar e o desperdício de
            alimentos, criando uma ponte entre aqueles que têm o desejo de
            ajudar e aqueles que precisam de suporte para garantir uma
            alimentação digna. Acreditamos que todos têm o direito a uma vida
            saudável e, por meio deste projeto, buscamos conectar recursos e
            esforços para alcançar esse objetivo.
          </p>
          <h2 className={styles.titulo}>Visão</h2>
          <p className={styles.paragrafoInfo}>
            Nossa visão é construir um futuro onde o desperdício de alimentos
            seja reduzido ao mínimo e onde todas as pessoas tenham acesso a
            refeições adequadas. Queremos ser um modelo de impacto social,
            inspirando outras iniciativas e promovendo uma cultura de
            solidariedade e responsabilidade para com o próximo.
          </p>
          <h2 className={styles.titulo}>Valores</h2>
          <ul className={styles.listaInfo}>
            <li className={styles.paragrafoListaInfo}>
              <strong>Empatia:</strong> Colocamos as pessoas em primeiro lugar,
              entendendo suas necessidades e desafios para melhor apoiá-las.
            </li>
            <li className={styles.paragrafoListaInfo}>
              <strong>Responsabilidade Social:</strong> Reconhecemos o impacto
              de nossos atos e trabalhamos para que cada ação contribua
              positivamente para a sociedade.
            </li>
            <li className={styles.paragrafoListaInfo}>
              <strong>Sustentabilidade:</strong> Comprometemo-nos em combater o
              desperdício e promover o uso consciente dos recursos.
            </li>
          </ul>
        </div>
        <div className={styles.containerInte}>
          <h2 className={styles.titulo}>Integrantes</h2>
          <ul className={styles.listaInte}>
            <li className={styles.integrante}>
              <img
                className={styles.imgInte}
                src="./src/assets/Thiago.jpg"
                alt=""
              />
              <div className={styles.infoInte}>
                <h3>Thiago dos Santos Cordeiro</h3>
                <p>
                  Foi responsável por desenvolver a integração dos produtos do
                  catalogo com quantidade ao carrinho, auxiliar na arquitetura e
                  idealização do projeto e gravar o vídeo final.
                </p>
              </div>
            </li>
            <li className={styles.integrante}>
              <img
                className={styles.imgInte}
                src="./src/assets/jesseM-2.jpeg"
                alt=""
              />
              <div className={styles.infoInte}>
                <h3>Jessé Marques Mateus</h3>
                <p>
                  Foi responsável por desenvolver o Design e a identidade visual
                  do projeto, Estruturação da pagina de Inventário de catálogo e
                  suas funcionalidades.
                </p>
              </div>
            </li>
            <li className={styles.integrante}>
              <img
                className={styles.imgInte}
                src="./src/assets/lucasT-1.png"
                alt=""
              />
              <div className={styles.infoInte}>
                <h3>Lucas Gomes Tambasco</h3>
                <p>
                  foi responsável por idealizar a solução do projeto,
                  desenvolvendo uma abordagem prática e eficaz para atender ao
                  problema proposto. Ele criou a página Sobre e a página
                  inicial, com o objetivo de transmitir a missão, visão e
                  valores do projeto de forma clara e envolvente para o público.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Sobre;
