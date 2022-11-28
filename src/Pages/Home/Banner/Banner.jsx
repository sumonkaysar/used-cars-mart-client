import banner from '../../../assets/banner/banner.jpg';

const Banner = () => {

  const bannerStyle = { backgroundImage: `url(${banner})` };

  return (
    <div className='mx-5'>
      <div className="hero h-[500px] rounded-2xl overflow-hidden" style={bannerStyle}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="mb-5 text-4xl font-semibold">Used Cars Mart</h2>
            <p className="mb-5">The best website to buy or resale used cars. Used Cars Mart helps you get a great deal on a used car by giving you up-to-the-minute car pricing information so that you're fully armed with the knowledge you need as you shop for a car</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
