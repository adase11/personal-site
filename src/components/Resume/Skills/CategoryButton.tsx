import PropTypes from 'prop-types';

export interface ICategoryButton {
  handleClick: (label: string) => void;
  active: any;
  label: string;
}

const CategoryButton = (data: ICategoryButton) => (
  <button
    className={`skillbutton ${data.active[data.label] ? 'skillbutton-active' : ''}`}
    type="button"
    onClick={() => data.handleClick(data.label)}
  >
    {data.label}
  </button>
);

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired
};

export default CategoryButton;
