import create from 'zustand'
import shallow from 'zustand/shallow'

const useStore = create((set, get) => ({
  bears: 'bears',
  c: '123',
  name: () => get().bears + '123',  // 计算属性
  objChange: () => set(state => ({obj: {...state.obj, a: 3}})),
  change: (source="mangmang") => set(() => ({bears: source})),
  fetch: async () => {
    const bears = get().bears
    console.log(bears, 'async')
    await new Promise(resolve => {
      setTimeout(() => {
        set({bears: 'async'})
        resolve()
      }, 3000)
    })
  }
}))

const store2 = create(() => ({
  name: 'store2'
}))

console.log(store2, '2')

export default {
  useStore,
  store2,
  shallow
}

export {
  useStore,
  store2,
  shallow
}

