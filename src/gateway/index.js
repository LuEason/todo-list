import axios from 'axios';

const basicURL = "https://5f29717da1b6bf0016ead66c.mockapi.io/todos";
const instance = axios.create();

const _request = async (options) => {
  return instance.request(options);
};

const list = async function () {
  return _request({
    url: basicURL + '/todos',
    method: 'get'
  })
};

const insert = async function (todo) {
  return _request({
    url: basicURL + '/todos',
    method: 'post',
    data: {
      ...todo
    }
  })
};

const deleteById = async function (id) {
  return _request({
    url: basicURL + '/todos/' + id,
    method: 'delete'
  })
};

const update = async function (id, todo) {
  return _request({
    url: basicURL + '/todos/' + id,
    method: 'put',
    data: {
      ...todo
    }
  })
};


export default {
  list,
  insert,
  deleteById,
  update
}
