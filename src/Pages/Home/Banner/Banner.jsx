import banner from '../../../assets/banner/banner.jpg';

const Banner = () => {

  const bannerStyle = { backgroundImage: `url(${banner})` };

  return (
      <div className="relative h-[500px] sm:h-[700px] overflow-hidden">
        <img src={banner} alt="Used cars for sale" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="mb-3 text-4xl font-bold">Used Cars Mart</h2>
          <h1 className="mb-5">Find Your Perfect Used Car Today</h1>
          <a href="#categories" className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg">Browse Cars</a>
        </div>
      </div>
  );
}

export default Banner;
