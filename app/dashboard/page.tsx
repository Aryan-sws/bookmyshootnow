export default function CustomerDashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Customer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded">Booking History</div>
        <div className="p-4 border rounded">Upcoming Shoots</div>
        <div className="p-4 border rounded">Profile Settings</div>
      </div>
    </div>
  );
}