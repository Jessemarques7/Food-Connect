import styled from "styled-components";

const StyledFriend = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;

  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.414);
  // Adiciona a classe condicional
  ${(props) =>
    props.friend.id === props.selectedFriend &&
    `
      background-color: rgba(255, 255, 255, 0.2); // Cor de fundo quando selecionado
    `}

  img {
    display: flex;
    border-radius: 5px;
    height: 60px;
  }
  p {
    padding-left: 25px;
    font-size: 18px;
  }
`;

function Friend({ friend, selectedFriend, setSelectedFriend }) {
  return (
    <StyledFriend
      onClick={() => setSelectedFriend(friend.id)}
      friend={friend}
      selectedFriend={selectedFriend}
    >
      <img src={friend.image} alt={friend.name} />
      <p>{friend.name}</p>
    </StyledFriend>
  );
}

export default Friend;
