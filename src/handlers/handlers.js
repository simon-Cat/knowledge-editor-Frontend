// Обновление полей базы знаний
export const handleChange = (
  e,
  baseOfKnowledge,
  handler,
  path_1,
  path_2,
  path_3,
  path_4,
  path_5,
  path_6
) => {
  // делаем копию объекта базы знаний
  const toJson = JSON.stringify(baseOfKnowledge);
  const copyBaseOfKnowledge = JSON.parse(toJson);

  if (path_1 === 'title') {
    copyBaseOfKnowledge[path_1] = e.target.value;
    return handler(copyBaseOfKnowledge);
  } else if (path_1 === 'init_question' && path_2 === 'text') {
    copyBaseOfKnowledge[path_1][path_2] = e.target.value;

    return handler(copyBaseOfKnowledge);
  } else if (path_1 === 'init_question' && path_2 === 'answers') {
    copyBaseOfKnowledge[path_1][path_2][path_3] = e.target.value;

    return handler(copyBaseOfKnowledge);
  } else if (path_1 === 'sections' && path_3 === 'name') {
    copyBaseOfKnowledge[path_1][path_2][path_3] = e.target.value;

    return handler(copyBaseOfKnowledge);
  } else if (path_1 === 'sections' && path_3 === 'solutions') {
    console.log('dd');
    copyBaseOfKnowledge[path_1][path_2][path_3][path_4][path_5] =
      e.target.value;

    return handler(copyBaseOfKnowledge);
  } else if (
    path_1 === 'sections' &&
    path_3 === 'questions' &&
    path_5 === 'text'
  ) {
    console.log('dd');
    copyBaseOfKnowledge[path_1][path_2][path_3][path_4][path_5] =
      e.target.value;

    return handler(copyBaseOfKnowledge);
  } else if (
    path_1 === 'sections' &&
    path_3 === 'questions' &&
    path_5 === 'answers'
  ) {
    console.log('dd');
    copyBaseOfKnowledge[path_1][path_2][path_3][path_4][path_5][path_6] =
      e.target.value;

    return handler(copyBaseOfKnowledge);
  }
};

// Удаление базы знаний
export const removeBaseOfKnowledge = (e, baseOfKnowledge, itemID, handler) => {
  const baseOfKnowledgeToJSON = JSON.stringify(baseOfKnowledge);
  const copybaseOfKnowledge = JSON.parse(baseOfKnowledgeToJSON);
  const index = copybaseOfKnowledge.findIndex(
    (element) => element.id === itemID
  );

  copybaseOfKnowledge.splice(index, 1);

  return handler(copybaseOfKnowledge);
};
