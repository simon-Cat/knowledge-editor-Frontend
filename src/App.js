import './App.css';
import Header from './components/Header';
import ExpertSystem from './components/ExpertSystem';
import KnowledgeEditor from './components/KnowledgeEditor';
import BaseKnowledgeCard from './components/BaseKnowledgeCard';
import { useState, useEffect } from 'react';
import { getBaseOfKnowledge } from './api/api';
import { Routes, Route } from 'react-router-dom';
// import BaseOfKnowledgeItem from './components/baseOfKnowledgeItem';

// import { handleChange } from './handlers/handlers.js';

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
      {/* <div>
        {data &&
          Object.keys(data).map((key, dataIndex) => {
            if (key === 'title') {
              return (
                <div>
                  <label htmlFor="title">Название базы знаний</label> -{' '}
                  <input
                    className="border-2 p-1 border-sky-600"
                    id="title"
                    value={data[key]}
                    onChange={(e) => {
                      handleChange(e, data, changeHandler, 'title');
                    }}
                  />
                </div>
              );
            }
            if (key === 'init_question') {
              return (
                <div>
                  <label htmlFor="init_question">Стартовый вопорс:</label>
                  <br />
                  <input
                    className="ml-2 border-2 p-1 border-sky-600"
                    id="init_question"
                    type="text"
                    value={data[key].text}
                    onChange={(e) => {
                      handleChange(
                        e,
                        data,
                        changeHandler,
                        'init_question',
                        'text'
                      );
                    }}
                  />
                  <p className="ml-4">Варианты ответов:</p>
                  {data[key].answers.map((initAnswer, InitAnswerIndex) => (
                    <>
                      <input
                        type="text"
                        className="ml-6 mb-2 border-2 p-1 border-sky-600"
                        value={initAnswer}
                        onChange={(e) => {
                          handleChange(
                            e,
                            data,
                            changeHandler,
                            'init_question',
                            'answers',
                            InitAnswerIndex
                          );
                        }}
                      />
                      <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                        Удалить
                      </button>
                      <br />
                    </>
                  ))}
                  <button className="ml-6 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                    Добавить ответ
                  </button>
                  <br />
                </div>
              );
            }
            if (key === 'sections') {
              return (
                <div>
                  <p>Разделы</p>
                  {data[key].map((section, sectionIndex) => (
                    <>
                      <input
                        className="ml-2 mb-2 border-2 p-1 border-sky-600"
                        type="text"
                        value={section.name}
                        onChange={(e) => {
                          handleChange(
                            e,
                            data,
                            changeHandler,
                            'sections',
                            sectionIndex,
                            'name'
                          );
                        }}
                      />
                      <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                        Удалить
                      </button>
                      <br />
                      <button className="ml-2 mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                        Добавить раздел
                      </button>
                      <br />
                      <p className="ml-4">Вопросы раздела:</p>
                      {section.questions.map((question, questionIndex) => (
                        <>
                          <input
                            className="ml-6 mb-2 border-2 p-1 border-sky-600"
                            type="text"
                            value={question.text}
                            onChange={(e) => {
                              handleChange(
                                e,
                                data,
                                changeHandler,
                                'sections',
                                sectionIndex,
                                'questions',
                                questionIndex,
                                'text'
                              );
                            }}
                          />
                          <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                            Удалить
                          </button>
                          <br />
                          <p className="ml-8">Варианты ответов:</p>
                          {question.answers.map((answer, answerIndex) => (
                            <>
                              <input
                                className="ml-10 mb-2 border-2 p-1 border-sky-600"
                                type="text"
                                value={answer}
                                onChange={(e) => {
                                  handleChange(
                                    e,
                                    data,
                                    changeHandler,
                                    'sections',
                                    sectionIndex,
                                    'questions',
                                    questionIndex,
                                    'answers',
                                    answerIndex
                                  );
                                }}
                              />
                              <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                Удалить
                              </button>
                              <br />
                            </>
                          ))}
                          <button className="ml-10 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                            Добавить ответ
                          </button>
                          <br />
                        </>
                      ))}

                      <button className="ml-6 mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                        Добавить вопрос
                      </button>
                      <br />
                      <p className="ml-4">Варианты решений:</p>
                      {section.solutions.map((solution, solutionIndex) => (
                        <>
                          <input
                            className="ml-6 mb-2 border-2 p-1 border-sky-600"
                            type="text"
                            value={solution.text}
                            onChange={(e) => {
                              handleChange(
                                e,
                                data,
                                changeHandler,
                                'sections',
                                sectionIndex,
                                'solutions',
                                solutionIndex,
                                'text'
                              );
                            }}
                          />
                          <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                            Удалить
                          </button>
                          <br />
                        </>
                      ))}
                      <button className="ml-6 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                        Добавить решение
                      </button>
                      <br />
                    </>
                  ))}
                </div>
              );
            }
          })}
      </div> */}
    </div>
  );
}

export default App;
