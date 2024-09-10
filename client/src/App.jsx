import React, { useState } from 'react';

function App() {
  // State for the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  // State for server response
  const [postData, setPostData] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handlePost = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Make the POST request
    fetch('/api/post-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send formData in the POST request
    })
      .then((res) => res.json())
      .then((data) => {
        setPostData(data); // Update state with the response from the server
        console.log('Response from server:', data);
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div>
      <h1>Submit Your Details</h1>

      {/* Form for submitting data */}
      <form onSubmit={handlePost}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display the response from the server */}
      {postData && (
        <div>
          <h2>Server Response</h2>
          <pre>{JSON.stringify(postData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
