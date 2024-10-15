import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic goes here
    navigate('/dashboard');
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full" onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-6 text-center">Login</h2>
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
      <div className="flex justify-between">
        <a href="#" className="text-sm text-blue-600">Forgot Password?</a>
        <a href="/signup" className="text-sm text-blue-600">Sign Up</a>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
