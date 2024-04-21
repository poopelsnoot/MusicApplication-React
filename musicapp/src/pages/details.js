// import React from 'react';
// import musicService from '../services/music-group-service';
// import { useParams } from 'react-router-dom';

// export async function Details() {
//   const { musicGroupId } = useParams();

//   const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
//   const musicGroup = await service.readMusicGroupAsync (musicGroupId);
  
//   console.log (musicGroup);

//   if(!musicGroup) {
//     return <span>The music group you've requested doesn't exist.</span>;
//   }
  
//   return (
//     <div>
//       <h3>hello</h3>
//       <p>test</p>
//     </div>
//   );
// }