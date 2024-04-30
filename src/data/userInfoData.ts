
export type UserInfo = {
  img: string;
  username: string;
  id?: string;
  email: string;
  createdAt?: string;
  role: string;
  status: string;
  password?: string; 
  phone?: string;

};


export const usersData : UserInfo[] = [
    {
      img: "/images/noavatar.png",
      username: 'John Doe',
      id: '12345',
      email: 'john@mail.com',
      role: 'admin',
      createdAt: '2022-01-01',
      status: 'active',
      password: 'password123',
      phone: '081234567890',
    },
    {
      img: "/images/noavatar.png",
      username: 'Jane Smith',
      id: '67890',
      email: 'jane@mail.com',
      role: 'user',
      createdAt: '2022-02-15',
      status: 'nonactive',
      password: 'password456',
      phone: '087654321098',
    },
    // Tambahkan objek lain sesuai kebutuhan
  ];
