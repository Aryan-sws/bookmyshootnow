export default function PaymentPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Payment</h1>
      <div className="max-w-md space-y-4">
        <div className="p-4 border rounded">Order Summary</div>
        <div className="p-4 border rounded">Payment Method</div>
        <button className="w-full bg-green-500 text-white p-2 rounded">Pay Now</button>
      </div>
    </div>
  );
}