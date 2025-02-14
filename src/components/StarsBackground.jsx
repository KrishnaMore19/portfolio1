const StarsBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden bg-indigo-950">
      <div
        className="absolute inset-0 bg-stars animate-twinkle"
        style={{ width: '100%', height: '100%', willChange: 'background' }} // Ensure dimensions are set
      />
    </div>
  );
};

export default StarsBackground;
  
  