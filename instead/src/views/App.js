import React, { useState } from 'react';
import { getActivity } from '../controllers/ActivityController';
import Button from './Button';

function App() {
  const [activity, setActivity] = useState('');

  const handleClick = async () => {
    const newActivity = await getActivity();
    setActivity(newActivity);
  };

  return (
    <div>
      <h1>Activity Suggestions</h1>
      <Button onClick={handleClick} />
      <p>{activity}</p>
    </div>
  );
}

export default App;
