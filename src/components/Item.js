import styled from 'styled-components';
import "./Item.scss";

const pointsStyle = {
  color: "red",
  fontSize: "20px"
};

const Comments = styled.span`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Item(props) {
  const item = props.item;

  return (
    <>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span className="item-author">{item.author}</span>
      <Comments>{item.num_comments}</Comments>
      <span style={pointsStyle}>{item.points}</span>
    </>
  )
}