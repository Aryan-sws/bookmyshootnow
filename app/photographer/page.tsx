export default function PhotographerDashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Photographer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded">Manage Packages</div>
        <div className="p-4 border rounded">Booking Requests</div>
        <div className="p-4 border rounded">Earnings</div>
        <div className="p-4 border rounded">Reviews</div>
        <div className="p-4 border rounded">Availability</div>
      </div>
    </div>
  );
}