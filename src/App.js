import Header from './components/Header';
import ExpertSystem from './components/ExpertSystem';
import KnowledgeEditor from './components/KnowledgeEditor';
import BaseKnowledgeCard from './components/BaseKnowledgeCard';
import { useState, useEffect } from 'react';
import { getBaseOfKnowledge } from './api/api';
import { Routes, Route } from 'react-router-dom';

function App() {
  // тут храним всю базу знаний с сервера
  const [data, setData] = useState();

  // тут храним файл с новой
  // базой знаий
  const [file, setFile] = useState();

  // тянем файл с БЗ с сервера
  useEffect(() => {
    getBaseOfKnowledge(setData);
  }, []);

  // обновение базы знаний
  const changeHandler = (updatedBaSeOfKnowledge) => {
    setData(updatedBaSeOfKnowledge);
  };

  // удаление определенной базы знаний
  const removeBaseOfKnowledgeHandler = (updatedBaSeOfKnowledge) => {
    setData(updatedBaSeOfKnowledge);
  };

  // обработчик добавления
  // нового файла
  const fileChangeHandler = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // добавление новой базы знаний
  const addBaseOfKnowledgeHandler = (updatedBaSeOfKnowledge) => {
    setData(updatedBaSeOfKnowledge);
  };

  return (
    <div className="App p-6">
      <Header />

      <Routes>
        <Route path="/expsys" element={<ExpertSystem />} />
        <Route
          exact
          path="/editor"
          element={
            <KnowledgeEditor
              data={data}
              removeBaseHandler={removeBaseOfKnowledgeHandler}
              fileChangeHandler={fileChangeHandler}
              addBaseHandler={addBaseOfKnowledgeHandler}
              newBaseFile={file}
            />
          }
        />
        <Route
          path="/editor/:baseID"
          element={
            <BaseKnowledgeCard data={data} inputChangeHandler={changeHandler} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
