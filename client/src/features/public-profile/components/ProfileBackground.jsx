const ProfileBackground = () => {
  return (
    <>
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-300/40 blur-3xl animate-float" />

      <div
        className="absolute top-96 right-10 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute bottom-20 left-1/3 h-60 w-60 rounded-full bg-pink-300/40 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </>
  );
};

export default ProfileBackground;