import axios from 'axios';

export const startFetchFun = data => {
  const response = axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => {
      const responseTodos = res.data.slice(0, 3);
      result = responseTodos.map(a => {
        return {
          value: a.title,
          key: Math.random().toString(),
        };
      });
      console.log('result', result);
      return result;
    });
  console.log('response', response);
  return response;
};
