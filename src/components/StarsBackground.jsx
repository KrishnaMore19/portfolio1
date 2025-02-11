const StarsBackground = () => {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1, // Smaller stars
  }));

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#1a012a]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: "rgba(255, 255, 255, 0.8)", // Bright stars
            boxShadow: "0 0 6px rgba(255, 255, 255, 0.5)",
          }}
        />
      ))}

      {/* Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(103,58,183,0.3) 10%, rgba(26,1,42,0.9) 60%)]"></div>
    </div>
  );
};

export default StarsBackground;
