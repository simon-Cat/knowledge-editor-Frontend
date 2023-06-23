import './App.css';
import { useState } from 'react';

function App() {
  // тут храним базу знаний с сервера
  const [data, setData] = useState();
  // тянем файл с БЗ с сервера
  const getBOK = () => {
    fetch('http://localhost:8080/')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  };
  // обработчик инпута
  const handleChange = (e) => {};

  return (
    <div className="App p-6">
      <h1 className="text-center text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Редактор знаний
      </h1>
      <div className="mb-6">
        <p className="text mb-4">Диагоностика автомобиля</p>
        <button
          onClick={getBOK}
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
          Object.keys(data).map((key, index) => {
            if (key === 'title') {
              return (
                <div>
                  <label htmlFor="title">Название базы знаний</label> -{' '}
                  <input
                    className="border-2 p-1 border-sky-600"
                    id="title"
                    value={data[key]}
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
                  />
                  <p className="ml-4">Варианты ответов:</p>
                  {data[key].answers.map((answer, index) => (
                    <>
                      <input
                        type="text"
                        className="ml-6 mb-2 border-2 p-1 border-sky-600"
                        value={answer}
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
                  {data[key].map((section, index) => (
                    <>
                      <input
                        className="ml-2 mb-2 border-2 p-1 border-sky-600"
                        type="text"
                        value={section.name}
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
                      {section.questions.map((question, index) => (
                        <>
                          <input
                            className="ml-6 mb-2 border-2 p-1 border-sky-600"
                            type="text"
                            value={question.text}
                          />
                          <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                            Удалить
                          </button>
                          <br />
                          <p className="ml-8">Варианты ответов:</p>
                          {question.answers.map((answer, index) => (
                            <>
                              <input
                                className="ml-10 mb-2 border-2 p-1 border-sky-600"
                                type="text"
                                value={answer}
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
                      {section.solutions.map((solution, index) => (
                        <>
                          <input
                            className="ml-6 mb-2 border-2 p-1 border-sky-600"
                            type="text"
                            value={solution.text}
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
