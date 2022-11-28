const ContactCard = ({Icon, title, info, bgColor}) => {

  return (
    <div className={`card shadow-xl text-white ${bgColor}`}>
      <div className="card-body items-center text-center">
        <div className="card-title flex-col">
          <Icon className="text-3xl" />
          <h3>{title}</h3>
        </div>
        <div>
          {info}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
