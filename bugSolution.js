```javascript
//Corrected Component
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!data) {
    return <Text>No data available</Text>;
  }

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};
export default MyComponent; 
```