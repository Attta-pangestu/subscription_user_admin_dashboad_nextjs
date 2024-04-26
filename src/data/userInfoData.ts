
export type UserInfo = {
  img: string;
  username: string;
  id?: string;
  email: string;
  created_at: string;
  role: string;
  status: string;
};


export const usersData : UserInfo[] = [
    {
      img: "/images/noavatar.png",
      username: 'John Doe',
      id: '12345',
      email: 'john@mail.com',
      role: 'admin',
      created_at: '2022-01-01',
      status: 'active',
    },
    {
      img: "/images/noavatar.png",
      username: 'Jane Smith',
      id: '67890',
      email: 'jane@mail.com',
      role: 'user',
      created_at: '2022-02-15',
      status: 'nonactive',
    },
    // Tambahkan objek lain sesuai kebutuhan
  ];