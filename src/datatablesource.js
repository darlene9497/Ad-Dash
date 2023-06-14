export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow Flakes",
      img: "https://img.freepik.com/free-photo/woman-with-long-hair-white-top-is-standing-beach_1340-37514.jpg?size=626&ext=jpg",
      status: "active",
      email: "snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://img.freepik.com/premium-photo/digital-illustration-man-with-red-jacket-blue-eyes_1340-41269.jpg?size=626&ext=jpg",
      email: "jamie@gmail.com",
      status: "inactive",
      age: 42,
    },
    {
      id: 3,
      username: "Pop Cornell",
      img: "https://img.freepik.com/free-photo/woman-with-robot-head-helmet-that-says-robot-it_1340-39428.jpg?size=626&ext=jpg",
      email: "pop@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark Kaveve",
      img: "https://img.freepik.com/free-photo/lion-king-with-full-armor-weapon-generative-ai_191095-521.jpg?size=626&ext=jpg",
      email: "kaveve@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen Kazoze",
      img: "https://img.freepik.com/free-photo/tiger-leather-jacket-stands-street-front-neon-sign-that-says-i-am-tiger_1340-39347.jpg?size=626&ext=jpg",
      email: "kazoze@gmail.com",
      status: "inactive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre Andy",
      img: "https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?size=626&ext=jpg",
      email: "andy@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford Pey",
      img: "https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg?size=626&ext=jpg",
      email: "pey@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances Hughes",
      img: "https://img.freepik.com/free-psd/3d-illustration-cartoon-character-beard-businessman-standing-open-his-arm-during-talking_1150-52360.jpg?size=626&ext=jpg",
      email: "frances@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie Akoth",
      img: "https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?size=626&ext=jpg",
      email: "akoth@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Tik Bluise",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "tik@gmail.com",
      status: "active",
      age: 65,
    },
  ];