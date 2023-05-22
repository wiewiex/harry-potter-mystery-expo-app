import { useRef } from 'react';

export default function renderCounter() {
  const count = useRef(0);
  count.current = count.current + 1;
  console.log('r' + count.current);
}
