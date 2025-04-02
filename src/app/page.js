// 'use client';

//  // any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

// import { useAuth } from '@/utils/context/authContext';
// import TaskCard from '../components/Card';
// import { useEffect, useState } from 'react';
// import { getTaskData } from '../api/taskData';

// function Home() {
//   const { user } = useAuth();
//   const [tasks, setTasks] = useState[[]];

//   const getAllTasks = () =>{
//     getTaskData(user.uid).then((data) => {
//       setTasks(data)
//     });
//   };

//   useEffect(() => {
//     getAllTasks()
//   }, []);

//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       <h1>Hello {user.displayName}! </h1>
//       <TaskCard key={tasks.} />
//     </div>
//   );
// }

// export default Home;
