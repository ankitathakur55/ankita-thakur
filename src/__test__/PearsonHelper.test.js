import { pearsonHelper } from '../PearsonHelper';
import axios from 'axios';

test('test getUserList with status 200', () => {
  const users = [
    {
      id: 4,
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
    },
    {
      id: 5,
      first_name: 'Charles',
      last_name: 'Morris',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
    },
    {
      id: 6,
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
    }
  ];
  axios.get = jest.fn();
  axios.get.mockReturnValue({
    status: 200,
    data: {
      data: [
        {
          id: 4,
          first_name: 'Eve',
          last_name: 'Holt',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
        },
        {
          id: 5,
          first_name: 'Charles',
          last_name: 'Morris',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
        }
      ]
    }
  });
  pearsonHelper.getUserList(users).then(data => {
    expect(data).toEqual(users);
  });
});

test('test getUserList with status not equal to 200', () => {
  const users = [
    {
      id: 4,
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
    },
    {
      id: 5,
      first_name: 'Charles',
      last_name: 'Morris',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
    },
    {
      id: 6,
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
    }
  ];
  axios.get = jest.fn();
  axios.get.mockReturnValue({
    status: 500
  });
  pearsonHelper.getUserList(users).then(data => {
    expect(data).toEqual(users);
  });
});
