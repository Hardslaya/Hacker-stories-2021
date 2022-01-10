import Item from "./Item";

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function List({ searchTerm }) {
  return (
    <ul>
      {list.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(function (item) {
        return (
          <li key={item.objectID}>
            <Item item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default List;
