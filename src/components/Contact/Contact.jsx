import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/slice';

export function Contact(props) {
  const dispatch = useDispatch();

  return (
    <li>
      {props.name}: {props.number}{' '}
      <button type="button" onClick={() => dispatch(deleteContact(props.id))}>
        Delete
      </button>
    </li>
  );
}
