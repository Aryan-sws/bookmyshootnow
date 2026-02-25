export default function PhotographersListing() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Photographers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for photographer cards */}
        <div className="p-4 border rounded">Photographer 1</div>
        <div className="p-4 border rounded">Photographer 2</div>
        <div className="p-4 border rounded">Photographer 3</div>
      </div>
    </div>
  );
}