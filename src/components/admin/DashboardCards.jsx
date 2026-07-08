function DashboardCards() {

  const cards = [

    {
      title:"Registered Citizens",
      value:"22,156,458",
      icon:"👥"
    },

    {
      title:"Pending Verification",
      value:"128",
      icon:"⏳"
    },

    {
      title:"Approved Today",
      value:"54",
      icon:"✅"
    },

    {
      title:"Rejected IDs",
      value:"7",
      icon:"❌"
    }

  ];

  return (

    <div className="cards">

      {cards.map((card,index)=>(

        <div className="card" key={index}>

          <div className="card-icon">

            {card.icon}

          </div>

          <h3>{card.title}</h3>

          <h1>{card.value}</h1>

        </div>

      ))}

    </div>

  );

}

export default DashboardCards;