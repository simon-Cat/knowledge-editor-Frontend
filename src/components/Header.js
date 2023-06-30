import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mb-8">
      <Link to="/expsys">
        <span className="p-2 mr-2 border-2 rounded">Экспертная система</span>
      </Link>
      <Link to="/editor">
        <span className="p-2 border-2 rounded">Редактор знаний</span>
      </Link>
    </div>
  );
};

export default Header;
