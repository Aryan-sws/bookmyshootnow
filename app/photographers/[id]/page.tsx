export default function PhotographerProfile({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Photographer Profile - {params.id}</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded">Portfolio</div>
        <div className="p-4 border rounded">Packages & Pricing</div>
        <div className="p-4 border rounded">Reviews</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
      </div>
    </div>
  );
}