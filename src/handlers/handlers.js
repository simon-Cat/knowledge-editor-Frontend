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
