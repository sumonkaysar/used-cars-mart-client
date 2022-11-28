import banner from '../../../assets/banner/banner.jpg';

const Banner = () => {

  const bannerStyle = { backgroundImage: `url(${banner})` };

  return (
    <div className='mx-5'>
      <div className="hero h-[500px] rounded-2xl overflow-hidden" style={bannerStyle}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5"></p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
