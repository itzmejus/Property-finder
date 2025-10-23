const ComingSoonPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6 text-center">

      {/* Illustration */}
      <img
        src="https://img.icons8.com/ios-filled/50/future.png"
        alt="Under Construction"
        className="w-40 h-40 mb-8 animate-pulse"
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        We Are Building This Page
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Our team is working hard to create an amazing experience for you.
        Stay tuned! We promise it’ll be worth the wait.
      </p>

    </div>
  );
};

export default ComingSoonPage;
