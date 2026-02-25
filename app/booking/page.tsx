export default function BookingPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Book Your Shoot</h1>
      <div className="max-w-md space-y-4">
        <div className="p-4 border rounded">Select Date & Time</div>
        <div className="p-4 border rounded">Choose Package</div>
        <button className="w-full bg-blue-500 text-white p-2 rounded">Proceed to Payment</button>
      </div>
    </div>
  );
}