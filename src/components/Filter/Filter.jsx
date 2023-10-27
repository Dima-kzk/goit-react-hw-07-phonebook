import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterByName } from 'redux/slice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterByName(e.target.value.toLowerCase()))}
      />
    </>
  );
}
