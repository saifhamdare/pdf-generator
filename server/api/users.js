import express from 'express';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for unique IDs
const router = express.Router();
let Users = [
    { id: 1, name: 'Alice' }, 
    { id: 2, name: 'Bob' },
  { id: 4, name: 'John Doe', email: 'john@doe.com' },
  { id: 3, name: 'Jane Smith', email: 'jane@hoe.com' },
];

export default function handler(req, res) {
    console.log('Received request:', req.method, req.body);
  if (req.method === 'GET') {
    // Example: Fetch users (mocked here)
    return res.status(200).json({
      message: 'Get all users',
      users: Users,
    });
  }

  if (req.method === 'POST') {
    const user = req.body;
    return res.status(201).json({
      message: 'User created',
      user,
    });
  }
  

  // Any other method
//   res.status(405).json({ error: 'Method Not Allowed' });
}



router.get('/', (req, res) => {
  res.send(Users);
});
router.post('/', (req, res) => {
  Users.push({...req.body, id: uuidv4()});
  console.log('Added new user:', Users);
  res.send(`User ${req.body.name} added successfully!`);
});
// router.get('/:id', (req, res) => {
//     console.log('Fetching user with ID:', req.params);
//     const user = Users.find(u => u.id === req.params.id);
//     console.log('Fetched user:', user);
//     if (!user) {
//       return res.status(404).send({error:'User not found', status:404});
//     }else if (user) {
//       console.log('User found:', user);
//       res.send({message: `User fetched successfully!`,status:200,data:user});
//     }
// });
// router.patch('/:id', (req, res) => {
//   let user = Users.find(u => u.id === req.params.id);
//     if (!user) {
//         return res.status(404).send({error:'User not found', status:404});
//     }else if (user) {
//         console.log('User found:', user);
//       if (req?.body?.name) user.name = req.body.name;
//       if (req?.body?.email) user.email = req.body.email;
//     }
//     console.log('Updated user:', user);
    
//   res.status(200).send({message:`User ${req.body.name} Updated successfully!`,  data:user});
// });
// router.delete('/:id', (req, res) => {
//   console.log('Added new user:', Users);
//     Users = Users.filter(u => u.id !== req.params.id);
    
//   res.send({message: `User Deleted successfully!`,status:200,data:user});
// });


// // export default router;