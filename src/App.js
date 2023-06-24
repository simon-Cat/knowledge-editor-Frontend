import './App.css';
import { useState } from 'react';
import { handleChange } from './handlers/handlers.js';

function App() {
  // тут храним базу знаний с сервера
  const [data, setData] = useState();
  // тянем файл с БЗ с сервера
  const getBaseOfKnowledge = () => {
    fetch('http://localhost:8080/')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  };

  // обноваление инпутов
  const changeHandler = (UpdatedBaSeOfKnowledge) => {
    setData(UpdatedBaSeOfKnowledge);
  };
  return (
    <div className="App p-6">
      <h1 className="text-center text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Редактор знаний
      </h1>
      <div className="mb-6">
        <p className="text mb-4">Диагоностика автомобиля</p>
        <button
          onClick={getBaseOfKnowledge}
          className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Редактировать
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Удалить
        </button>
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default App;
