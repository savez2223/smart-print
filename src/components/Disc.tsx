const Disc = () => {
  return (
    <div
      className="w-full text-white px-6 py-12"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #1a1a1a 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>

        <p className="text-lg opacity-90 leading-relaxed">
          Smart Printer is an independent company and is not affiliated,
          associated, authorized, endorsed by, or in any way officially
          connected with any brand, company, or organization unless explicitly
          stated. All product and company names are trademarks™ or registered®
          trademarks of their respective holders. Use of them does not imply any
          affiliation with or endorsement by them.
        </p>

        <p className="text-lg opacity-90 leading-relaxed">
          We operate as an individual entity with our own services, content, and
          identity. Any references to third-party products, services, or brands
          are purely for informational or comparative purposes only.
        </p>
      </div>
    </div>
  );
};

export default Disc;
