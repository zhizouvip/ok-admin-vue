import { createVNode, createBlock } from 'vue'

const _hoisted_2 = function (d: string) {
  return createVNode(
    'path',
    {
      d,
      fill: 'currentColor'
    },
    null,
    -1
  )
}
export default function (d: string) {
  return createBlock(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024'
    },
    [_hoisted_2(d)]
  )
}
