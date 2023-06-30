import { removeBaseOfKnowledge, addBaseOfKnowledge } from '../api/api';
import { Link } from 'react-router-dom';

const KnowledgeEditor = ({
  data,
  removeBaseHandler,
  fileChangeHandler,
  addBaseHandler,
  newBaseFile,
}) => {
  return (
    <div>
      <h1 className="text-center text-4xl mb-4">Редактор знаний</h1>
      {!data.length && <h2>Нет данных</h2>}
      {data.length &&
        data.map((d) => (
          <div key={d.id} className="mb-6 border p-6 rounded-md shadow w-80">
            <p className="text mb-4">{d.title}</p>
            <Link to={`${d.id}`}>
              <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Редактировать
              </button>
            </Link>
            <button
              onClick={(e) => {
                removeBaseOfKnowledge(d.id, removeBaseHandler);
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Удалить
            </button>
          </div>
        ))}
      <div className="border p-6 rounded-md shadow w-80">
        <label>
          Выберите файл
          <input
            className="mb-3"
            type="file"
            onChange={(e) => {
              fileChangeHandler(e);
            }}
          />
        </label>

        <button
          onClick={(e) => {
            addBaseOfKnowledge(newBaseFile, addBaseHandler);
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Добваить
        </button>
      </div>
    </div>
  );
};

export default KnowledgeEditor;
