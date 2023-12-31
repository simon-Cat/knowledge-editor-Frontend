import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  handleChange,
  handleAddField,
  handleRemoveField,
} from '../handlers/handlers';
import { updateBaseOfKnowledge } from '../api/api';

const BaseKnowledgeCard = ({ data, inputChangeHandler }) => {
  const [d, setD] = useState({});
  let { baseID } = useParams();

  useEffect(() => {
    baseID = +baseID;
    const currentBase = data.find((d) => d.id === baseID);
    setD(currentBase);
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl mb-4">
        Редактирование элемента базы знаний
      </h1>
      <div>
        {!d && <h1>Нет данных</h1>}
        {d &&
          Object.keys(d).map((key, dIndex) => {
            if (key === 'title') {
              return (
                <div key={key.id}>
                  <label htmlFor="title">Название элемента базы знаний</label>
                  <br />
                  <input
                    className="border-2 p-2 border-sky-600 rounded"
                    id="title"
                    value={d[key]}
                    onChange={(e) => {
                      handleChange(e, d, setD, 'title');
                    }}
                  />
                </div>
              );
            }
            if (key === 'init_question') {
              return (
                <div key={key.id}>
                  <label className="ml-2" htmlFor="init_question">
                    Инициализирующий вопорс:
                  </label>
                  <br />
                  <input
                    className="ml-2 border-2 p-2 rounded border-sky-600"
                    id="init_question"
                    type="text"
                    value={d[key].text}
                    onChange={(e) => {
                      handleChange(e, d, setD, 'init_question', 'text');
                    }}
                  />
                  <p className="ml-4">Варианты ответов:</p>
                  {d[key].answers.map((initAnswer, InitAnswerIndex) => (
                    <>
                      <input
                        key={key.id}
                        type="text"
                        className="ml-6 mb-2 border-2 p-2 rounded border-sky-600"
                        value={initAnswer}
                        onChange={(e) => {
                          handleChange(
                            e,
                            d,
                            setD,
                            'init_question',
                            'answers',
                            InitAnswerIndex
                          );
                        }}
                      />
                      <button
                        onClick={(e) => {
                          handleRemoveField(
                            d,
                            setD,
                            'init_question',
                            'answers',
                            InitAnswerIndex
                          );
                        }}
                        className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Удалить
                      </button>
                      <br />
                    </>
                  ))}
                  <button
                    onClick={(e) => {
                      handleAddField(d, setD, 'init_question', 'answers');
                    }}
                    className="ml-6 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                  >
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
                  {d[key].map((section, sectionIndex) => (
                    <div className="mb-4 p-2 border-2 rounded-md shadow w-1/2">
                      <p>Наименование раздела</p>
                      <input
                        key={key.id}
                        className="ml-2 mb-2 border-2 p-2 rounded border-sky-600"
                        type="text"
                        value={section.name}
                        onChange={(e) => {
                          handleChange(
                            e,
                            d,
                            setD,
                            'sections',
                            sectionIndex,
                            'name'
                          );
                        }}
                      />
                      <button
                        onClick={(e) => {
                          handleRemoveField(d, setD, 'sections', sectionIndex);
                        }}
                        className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Удалить
                      </button>
                      <br />
                      <p className="ml-4">Вопросы раздела:</p>
                      {section.questions.map((question, questionIndex) => (
                        <div>
                          <p className="ml-6">Наименование вопроса</p>
                          <input
                            key={key.id}
                            className="ml-6 mb-2 border-2 p-2 rounded border-sky-600"
                            type="text"
                            value={question.text}
                            onChange={(e) => {
                              handleChange(
                                e,
                                d,
                                setD,
                                'sections',
                                sectionIndex,
                                'questions',
                                questionIndex,
                                'text'
                              );
                            }}
                          />
                          <button
                            onClick={(e) => {
                              handleRemoveField(
                                d,
                                setD,
                                'sections',
                                'questions',
                                sectionIndex,
                                questionIndex
                              );
                            }}
                            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Удалить
                          </button>
                          <br />
                          <p className="ml-8">Варианты ответов:</p>
                          {question.answers.map((answer, answerIndex) => (
                            <>
                              <input
                                key={key.id}
                                className="ml-10 mb-2 border-2 p-2 rounded border-sky-600"
                                type="text"
                                value={answer}
                                onChange={(e) => {
                                  handleChange(
                                    e,
                                    d,
                                    setD,
                                    'sections',
                                    sectionIndex,
                                    'questions',
                                    questionIndex,
                                    'answers',
                                    answerIndex
                                  );
                                }}
                              />
                              <button
                                onClick={(e) => {
                                  handleRemoveField(
                                    d,
                                    setD,
                                    'sections',
                                    'questions',
                                    'answers',
                                    sectionIndex,
                                    questionIndex,
                                    answerIndex
                                  );
                                }}
                                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                              >
                                Удалить
                              </button>
                              <br />
                            </>
                          ))}
                          <button
                            onClick={(e) => {
                              handleAddField(
                                d,
                                setD,
                                'sections',
                                'questions',
                                'answers',
                                sectionIndex,
                                questionIndex
                              );
                            }}
                            className="ml-10 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Добавить ответ
                          </button>
                          <br />
                        </div>
                      ))}
                      <button
                        onClick={(e) => {
                          handleAddField(
                            d,
                            setD,
                            'sections',
                            'questions',
                            sectionIndex
                          );
                        }}
                        className="ml-6 mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Добавить вопрос
                      </button>

                      <br />
                      <p className="ml-4">Варианты конечных решений:</p>
                      {section.solutions.map((solution, solutionIndex) => (
                        <>
                          <input
                            key={key.id}
                            className="ml-6 mb-2 border-2 p-2 rounded border-sky-600"
                            type="text"
                            value={solution.text}
                            onChange={(e) => {
                              handleChange(
                                e,
                                d,
                                setD,
                                'sections',
                                sectionIndex,
                                'solutions',
                                solutionIndex,
                                'text'
                              );
                            }}
                          />
                          <button
                            onClick={(e) => {
                              handleRemoveField(
                                d,
                                setD,
                                'sections',
                                'solutions',
                                sectionIndex,
                                solutionIndex
                              );
                            }}
                            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Удалить
                          </button>
                          <br />
                        </>
                      ))}
                      <button
                        onClick={(e) => {
                          handleAddField(
                            d,
                            setD,
                            'sections',
                            'solutions',
                            sectionIndex
                          );
                        }}
                        className="ml-6 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Добавить решение
                      </button>
                      <br />
                    </div>
                  ))}
                  <button
                    onClick={(e) => {
                      handleAddField(d, setD, 'sections');
                    }}
                    className="ml-2 mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Добавить раздел
                  </button>
                </div>
              );
            }
          })}
      </div>
      <button
        onClick={() => {
          updateBaseOfKnowledge(d, inputChangeHandler);
        }}
        className="mt-4 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold p-3 rounded"
      >
        Сохранить
      </button>
    </div>
  );
};

export default BaseKnowledgeCard;
