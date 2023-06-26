// получаем всю базу знаний
export const getBaseOfKnowledge = (handler) => {
  fetch('http://localhost:3000/')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      handler(res);
    });
};

// удаляем определенную базу знаний
export const removeBaseOfKnowledge = (id, handler) => {
  console.log(id);
  fetch('http://localhost:3000/', {
    method: 'DELETE',
    body: JSON.stringify({ id: id }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      handler((prev) => {
        return res;
      });
    });
};

// добавляем новую базу знаний
export const addBaseOfKnowledge = (file, handler) => {
  if (!file) {
    return;
  }
  fetch('http://localhost:3000/', {
    method: 'POST',
    body: file,
    headers: {
      'content-type': file.type,
      'content-length': `${file.size}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      handler(res);
    });
};

// обновление выбранной базы знаний
export const updateBaseOfKnowledge = (updatedBase, handler) => {
  fetch('http://localhost:3000/', {
    method: 'PATCH',
    body: JSON.stringify(updatedBase),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      handler(res);
    });
};
