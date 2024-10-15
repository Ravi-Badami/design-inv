import  { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation and submission logic
    if (password === confirmPassword) {
      console.log('Sign Up Successful');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full" onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-6 text-center">Sign Up</h2>
      <input
        className="mb-4 p-3 border border-gray-300 rounded w-full"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="mb-4 p-3 border border-gray-300 rounded w-full"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 p-3 border border-gray-300 rounded w-full"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="mb-4 p-3 border border-gray-300 rounded w-full"
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <a href="/" className="text-sm text-blue-600 block text-center mb-4">Already have an account? Login</a>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
