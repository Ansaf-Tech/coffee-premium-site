
import Image from 'next/image';

const Collection = () => {
  const items = [
    {
      name: 'Espresso Intenso',
      description: 'Rich & intense.',
      image: '/images/espresso-intenso.jpg',
    },
    {
      name: 'Caramel Macchiato',
      description: 'Sweet & creamy.',
      image: '/images/caramel-macchiato.jpg',
    },
    {
        name: 'Direct Roast',
        description: 'Prime blend.',
        image: '/images/direct-roast.jpg',
    }
  ];

  return (
    <section id="collection">
      <h2>The Collection</h2>
      <div>
        {items.map((item) => (
          <div key={item.name}>
            <Image src={item.image} alt={item.name} width={200} height={200} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
