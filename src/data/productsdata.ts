
export type ProductData = {
  img: string;
  title: string;
  desc: string;
  id: string;
  price: string;
  created_at: string;
  stock: string;
  status: 'active' | 'passive' | 'nonactive';
};



export const productsData : ProductData[] = [
    {
      img: "/images/noproduct.jpg",
      id: '12345',
      title: 'Sepatu Nike',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      price: 'Rp 120.000',
      created_at: '2022-01-01',
      stock: '72',
      status: 'active',
    },
    {
      img: "/images/noproduct.jpg",
      id: '67890',
      title: 'Kemeja Pria',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      price: 'Rp 250.000',
      created_at: '2022-02-15',
      stock: '35',
      status: 'passive',
    },
    {
      img: "/images/noproduct.jpg",
      id: '13579',
      title: 'Tas Wanita',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      price: 'Rp 300.000',
      created_at: '2022-03-10',
      stock: '18',
      status: 'active',
    },
    // Tambahkan objek lain sesuai kebutuhan
  ];
  