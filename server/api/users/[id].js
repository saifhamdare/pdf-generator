

export default function handler(req, res) {
let Users = [
  { id: 1, name: 'John Doe', email: 'john@doe.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@hoe.com' },
];
 const {
    query: { id },
    method,
  } = req;

 if (method === 'GET') {
    console.log('Fetching user with ID:', Number(id));
    const user = Users.find(u => u.id === Number(id));
     Users.find((u) =>  console.log('Fetching user with ID:', u));
    if (!user) {
      return res.status(404).send({error:'User not found', status:404});
    }else if (user) {
      return res.send({message: `User fetched successfully!`,status:200,data:user});
    }
};
if (method === 'DELETE') {
  let user = Users.find(u => u.id === Number(id));
    if (!user) {
        return res.status(404).send({error:'User not found', status:404});
    }else if (user) {
        console.log('User found:', user);
      if (req?.body?.name) user.name = req.body.name;
      if (req?.body?.email) user.email = req.body.email;
    }
    console.log('Updated user:', user);
    
  res.status(200).send({message:`User ${req.body.name} Updated successfully!`,  data:user});
};
if (method === 'DELETE') {
  console.log('Added new user:', Users);
    Users = Users.filter(u => u.id !== Number(id));
    
  res.send({message: `User Deleted successfully!`,status:200});
};
}