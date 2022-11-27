import errorImg from '../../assets/404/404-error.png';

const ErrorPage = () => {

  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center overflow-hidden'>
      <img className='w-full' src={errorImg} alt="404 Not Found" />
    </div>
  );
}

export default ErrorPage;
