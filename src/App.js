import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? <h1>Loading....</h1> : null}
    </div>
  );
}

export default App;
