// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ensureDbConnected } from '@/lib/dbConnect';
import { Admin } from 'db';
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'
const SECRET = 'SECRET';

type Data = {
  token?: string,
  message?: string
}

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // const email = req.body.email;
    // const password = req.body.password;

    await ensureDbConnected(); //dbline added (mongoose.connect)
    const { username, password } = req.body;
    const email = username;
    const admin = await Admin.findOne({ username });

    // function callback(admin) {
      if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
      } else {
          const obj = { username: username, password: password };
          const newAdmin = new Admin(obj);
          newAdmin.save();

          const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
          res.json({ message: 'Admin created successfully', token });
      }
  
    // }


    //original code form week-10/blob/master/server/routes/admin.js >  repo
    // const { username, password } = req.body;
    // function callback(admin) {
    //   if (admin) {
    //     res.status(403).json({ message: 'Admin already exists' });
    //   } else {
    //     const obj = { username: username, password: password };
    //     const newAdmin = new Admin(obj);
    //     newAdmin.save();

    //     const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    //     res.json({ message: 'Admin created successfully', token });
    //   }
  
    // }
    // Admin.findOne({ username }).then(callback);

  // res.status(200).json({ name: 'John Doe' })
}
