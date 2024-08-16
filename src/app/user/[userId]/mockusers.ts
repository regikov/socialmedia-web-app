export const mockUsers = [
    {
      id: 1,
      name: "László Nagy",
      profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
      statusMessage: "Enjoying the sunshine! ☀️",
      statusImage: "https://images.pexels.com/photos/671549/pexels-photo-671549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      friends: [2, 3],
    },
    {
      id: 2,
      name: "Judit Kovács",
      profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
      statusMessage: "Reading a great book. 📚",
      statusImage: "https://images.pexels.com/photos/5490059/pexels-photo-5490059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [1],
    },
    {
      id: 3,
      name: "Tamás Szabó",
      profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
      statusMessage: "Excited for the weekend! 🎉",
      statusImage: "https://images.pexels.com/photos/5591667/pexels-photo-5591667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [1],
    },
    {
      id: 4,
      name: "Erika Tóth",
      profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
      statusMessage: "Just got a new puppy! 🐶",
      statusImage: "https://images.pexels.com/photos/6684283/pexels-photo-6684283.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [5, 6],
    },
    {
      id: 5,
      name: "Zoltán Varga",
      profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
      statusMessage: "Running a marathon next week. 🏃‍♂️",
      statusImage: "https://images.pexels.com/photos/8520627/pexels-photo-8520627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [4, 6],
    },
    {
      id: 6,
      name: "Anna Horváth",
      profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
      statusMessage: "Learning to cook something new. 🍳",
      statusImage: "https://images.pexels.com/photos/4122953/pexels-photo-4122953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [4, 5],
    },
    {
      id: 7,
      name: "Gábor Kis",
      profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
      statusMessage: "Planning my next vacation. ✈️",
      statusImage: "https://images.pexels.com/photos/127905/pexels-photo-127905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [8, 9],
    },
    {
      id: 8,
      name: "Eszter Molnár",
      profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
      statusMessage: "Enjoying a quiet weekend.",
      statusImage: "https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [7, 9],
    },
    {
      id: 9,
      name: "Bence Farkas",
      profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
      statusMessage: "Working on a new project. 💻",
      statusImage: "https://images.pexels.com/photos/7498603/pexels-photo-7498603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [7, 8],
    },
    {
      id: 10,
      name: "Mária Papp",
      profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
      statusMessage: "Starting a new job today!",
      statusImage: "https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [11, 12],
    },
    {
      id: 11,
      name: "Lajos Balogh",
      profilePicture: "https://randomuser.me/api/portraits/men/6.jpg",
      statusMessage: "Trying out yoga for the first time. 🧘‍♂️",
      statusImage: "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [10, 12],
    },
    {
      id: 12,
      name: "Rita Kocsis",
      profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
      statusMessage: "Binge-watching a new series. 🍿",
      statusImage: "https://images.pexels.com/photos/13597946/pexels-photo-13597946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [10, 11],
    },
    {
      id: 13,
      name: "Péter Sándor",
      profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
      statusMessage: "Enjoying a cup of coffee. ☕",
      statusImage: "https://example.com/sunshine.jpg", // Image related to the status
      friends: [14, 15],
    },
    {
      id: 14,
      name: "József Kiss",
      profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
      statusMessage: "Going hiking this weekend. 🥾",
      statusImage: "https://images.pexels.com/photos/10431339/pexels-photo-10431339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [13, 15],
    },
    {
      id: 15,
      name: "Zsuzsanna Takács",
      profilePicture: "https://randomuser.me/api/portraits/women/7.jpg",
      statusMessage: "Reading a mystery novel. 🔍",
      statusImage: "https://images.pexels.com/photos/11191072/pexels-photo-11191072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [13, 14],
    },
    {
      id: 16,
      name: "Imre Szalai",
      profilePicture: "https://randomuser.me/api/portraits/men/9.jpg",
      statusMessage: "Playing some guitar. 🎸",
      statusImage: "https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [17, 18],
    },
    {
      id: 17,
      name: "Ildikó Németh",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
      statusMessage: "Baking cookies. 🍪",
      statusImage: "https://images.pexels.com/photos/6996333/pexels-photo-6996333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [16, 18],
    },
    {
      id: 18,
      name: "Zoltán Lakatos",
      profilePicture: "https://randomuser.me/api/portraits/men/10.jpg",
      statusMessage: "Running some errands.",
      statusImage: "https://images.pexels.com/photos/4815339/pexels-photo-4815339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [16, 17],
    },
    {
      id: 19,
      name: "Éva Juhász",
      profilePicture: "https://randomuser.me/api/portraits/women/9.jpg",
      statusMessage: "Playing with my cat. 🐱",
      statusImage: "https://images.pexels.com/photos/10520687/pexels-photo-10520687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [20, 21],
    },
    {
      id: 20,
      name: "Csaba Pál",
      profilePicture: "https://randomuser.me/api/portraits/men/11.jpg",
      statusMessage: "Catching up on sleep. 😴",
      statusImage: "https://images.pexels.com/photos/7282719/pexels-photo-7282719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [19, 21],
    },
    {
      id: 21,
      name: "Tímea Simon",
      profilePicture: "https://randomuser.me/api/portraits/women/10.jpg",
      statusMessage: "Exploring a new city. 🏙️",
      statusImage: "https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [19, 20],
    },
    {
      id: 22,
      name: "György Kocsis",
      profilePicture: "https://randomuser.me/api/portraits/men/12.jpg",
      statusMessage: "Working on my blog.",
      statusImage: "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [23, 24],
    },
    {
      id: 23,
      name: "Ágnes Szűcs",
      profilePicture: "https://randomuser.me/api/portraits/women/11.jpg",
      statusMessage: "Starting a new hobby. 🎨",
      statusImage: "https://images.pexels.com/photos/2070670/pexels-photo-2070670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [22, 24],
    },
    {
      id: 24,
      name: "Ferenc Pásztor",
      profilePicture: "https://randomuser.me/api/portraits/men/13.jpg",
      statusMessage: "Visiting family. 👨‍👩‍👧‍👦",
      statusImage: "https://images.pexels.com/photos/7946591/pexels-photo-7946591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
      friends: [22, 23],
    },
    {
      id: 25,
      name: "Katalin Fodor",
      profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
      statusMessage: "Learning a new language. 🌍",
      statusImage: "https://images.pexels.com/photos/5409047/pexels-photo-5409047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2g", // Image related to the status
      friends: [26, 27, 20, 4, 5, 7],
    },
    {
        id: 26,
        name: "Jana Bácsalmásy",
        profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg', // RandomUser API image
        statusMessage: "Baby on the way!!👶 ",
        statusImage: "https://images.pexels.com/photos/17204429/pexels-photo-17204429/free-photo-of-pregnant-woman-in-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image related to the status
        
        friends: [1,2,3,4,5,6,7,8,9,10,11,12, 13, 14, 15,],
      }
  ];
  