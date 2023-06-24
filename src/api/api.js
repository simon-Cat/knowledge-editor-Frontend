// тянем файл с БЗ с сервера
const getBaseOfKnowledge = (handler) => {
  fetch('http://localhost:8080/')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      handler(res);
    });
};
