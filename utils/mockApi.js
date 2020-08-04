const MOCK_USERS = [
  {
    name: 'User_1',
    password: 'pw1',
    avatar: 'pic1.png'
  },
  {
    name: 'User_2',
    password: 'pw2',
    avatar: 'pic2.png'
  }
]

export default function({method, token}) {

  debugger

  return MOCK_USERS[0]
}