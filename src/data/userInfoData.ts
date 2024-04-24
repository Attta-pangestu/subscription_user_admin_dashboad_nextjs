
type UserInfo = {
  img: string;
  username: string;
  id: string;
  email: string;
  created_at: string;
  role: string;
  status: string;
};


export const usersData : UserInfo[] = [
  
    {
      img: 'none',
      username: 'John Doe',
      id: '12345',
      email: 'john@mail.com',
      created_at: '2022-01-01',
      role: 'admin',
      status: 'active',
    },
    {
      img: 'none',
      username: 'Jane Smith',
      id: '67890',
      email: 'jane@mail.com',
      created_at: '2022-02-15',
      role: 'user',
      status: 'active',
    },
    // Tambahkan objek lain sesuai kebutuhan
  ];