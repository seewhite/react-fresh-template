import { atom, useRecoilState } from 'recoil'

const store = atom({
  key: 'state1',
  default: {
    name: 'recoil',
    value: 'recoiljs'
  }
})

const store1 = atom({
  key: 'state2',
  default: 1
})


export {
  store,
  store1,
  useRecoilState
}