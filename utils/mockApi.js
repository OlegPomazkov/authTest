const MOCK_AUTH_INFO = [
  {
    id: 1,
    token: 'User_1-pw1'
  },
  {
    id: 2,
    token: 'User_2-pw2'
  }
]
const MOCK_USERS = [
  {
    id: 1,
    name: 'User_1',
    email: 'pw1@domen.vvv',
    avatar: 'pic1.webp'
  },
  {
    id: 2,
    name: 'User_2',
    email: 'pw2@domen.vvv',
    avatar: 'pic2.webp'
  }
]

export default function({method, token}) {
  let data = null

  if( method === 'checkAuth') {
    let indAuth = MOCK_AUTH_INFO.findIndex( i => i.token === token)
    let indUser = (indAuth !== -1)? MOCK_USERS.findIndex( i => i.id === MOCK_AUTH_INFO[indAuth].id): -1

    data = indUser !== -1? MOCK_USERS[indUser]: null
  }

  return new Promise((res, rej) => {
    res(data)
  })
}