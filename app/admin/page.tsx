export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 border rounded">Manage Customers</div>
        <div className="p-4 border rounded">Manage Photographers</div>
        <div className="p-4 border rounded">Booking Management</div>
        <div className="p-4 border rounded">Reports & Analytics</div>
      </div>
    </div>
  );
}