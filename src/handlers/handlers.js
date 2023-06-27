// Обновление полей базы знаний
export const handleChange = (
  e,
  currentBaseOfKnowledge,
  handler,
  path_1,
  path_2,
  path_3,
  path_4,
  path_5,
  path_6
) => {
  // делаем копию объекта базы знаний
  const toJson = JSON.stringify(currentBaseOfKnowledge);
  const copycurrentBaseOfKnowledge = JSON.parse(toJson);

  if (path_1 === 'title') {
    copycurrentBaseOfKnowledge[path_1] = e.target.value;
    return handler(copycurrentBaseOfKnowledge);
  } else if (path_1 === 'init_question' && path_2 === 'text') {
    copycurrentBaseOfKnowledge[path_1][path_2] = e.target.value;

    return handler(copycurrentBaseOfKnowledge);
  } else if (path_1 === 'init_question' && path_2 === 'answers') {
    copycurrentBaseOfKnowledge[path_1][path_2][path_3] = e.target.value;

    return handler(copycurrentBaseOfKnowledge);
  } else if (path_1 === 'sections' && path_3 === 'name') {
    copycurrentBaseOfKnowledge[path_1][path_2][path_3] = e.target.value;

    return handler(copycurrentBaseOfKnowledge);
  } else if (path_1 === 'sections' && path_3 === 'solutions') {
    console.log('dd');
    copycurrentBaseOfKnowledge[path_1][path_2][path_3][path_4][path_5] =
      e.target.value;

    return handler(copycurrentBaseOfKnowledge);
  } else if (
    path_1 === 'sections' &&
    path_3 === 'questions' &&
    path_5 === 'text'
  ) {
    console.log('dd');
    copycurrentBaseOfKnowledge[path_1][path_2][path_3][path_4][path_5] =
      e.target.value;

    return handler(copycurrentBaseOfKnowledge);
  } else if (
    path_1 === 'sections' &&
    path_3 === 'questions' &&
    path_5 === 'answers'
  ) {
    console.log('dd');
    copycurrentBaseOfKnowledge[path_1][path_2][path_3][path_4][path_5][path_6] =
      e.target.value;

    return handler(copycurrentBaseOfKnowledge);
  }
};

// удаление поля из определенного
// элемента базы знаний
export const handleRemoveField = () => {};

// добавление поля в определенный
// элемент базы знаний
export const handleAddField = (
  data,
  handler,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5
) => {
  // создаем копию
  // определенного элемента
  // базы знаний
  const dataToJSON = JSON.stringify(data);
  const copyData = JSON.parse(dataToJSON);

  if (prop1 === 'init_question' && prop2 === 'answers') {
    // добавление поля ответа
    // на инициализирующий вопрос
    copyData[prop1][prop2].push('Введите текст ответа');
    handler((data) => copyData);
    return;
  } else if (prop1 === 'sections' && !prop2) {
    // добавление нового раздела
    copyData[prop1].push({
      name: 'Введите название раздела',
      questions: [
        {
          text: 'Введите текст вопроса',
          answers: ['Введите текст ответа'],
        },
      ],
      solutions: [
        {
          text: 'Введите текст конечного решения',
        },
      ],
    });
    handler((data) => copyData);
    return;
  } else if (
    prop1 === 'sections' &&
    prop2 === 'questions' &&
    prop3 !== 'answers'
  ) {
    // добавление нового вопроса
    copyData[prop1][prop3][prop2].push({
      text: 'Введите текст вопроса',
      answers: ['Введите текст ответа'],
    });
    handler((data) => copyData);
    return;
  } else if (
    // добавление нового ответа
    // на вопрос
    prop1 === 'sections' &&
    prop2 === 'questions' &&
    prop3 === 'answers'
  ) {
    copyData[prop1][prop4][prop2][prop5][prop3].push('Введите текст ответа');
    handler((data) => copyData);
    return;
  } else if (prop1 === 'sections' && prop2 === 'solutions') {
    // добавление нового
    // конечного решения
    copyData[prop1][prop3][prop2].push({
      text: 'Введите текст конечного решения',
    });
    handler((data) => copyData);
    return;
  }
};

// Удаление базы знаний
// export const removecurrentBaseOfKnowledge = (e, currentBaseOfKnowledge, itemID, handler) => {
//   const currentBaseOfKnowledgeToJSON = JSON.stringify(currentBaseOfKnowledge);
//   const copycurrentBaseOfKnowledge = JSON.parse(currentBaseOfKnowledgeToJSON);
//   const index = copycurrentBaseOfKnowledge.findIndex(
//     (element) => element.id === itemID
//   );

//   copycurrentBaseOfKnowledge.splice(index, 1);
//   removecurrentBaseOfKnowledge(itemID).

//   return handler(copycurrentBaseOfKnowledge);
// };
