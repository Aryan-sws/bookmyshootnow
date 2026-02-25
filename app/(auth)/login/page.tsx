export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border" />
          <input type="password" placeholder="Password" className="w-full p-2 border" />
          <button type="submit" className="w-full bg-blue-500 text-white p-2">Login</button>
        </form>
      </div>
    </div>
  );
}