import { useState } from 'react';

function Home() {
  const [str, setStr] = useState<string>('123');
  return <div>{str}</div>;
}
export default Home;
