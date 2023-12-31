import React from 'react';
import styles from './Advertising.module.scss';
import AdvCard from '../../components/AdvCard/AdvCard';
import brandRecognition from '/src/assets/icon-brand-recognition.svg';
import detailedRecords from '/src/assets/icon-detailed-records.svg';
import fullyCustomizable from '/src/assets/icon-fully-customizable.svg';

const Advertising = () => {
  const advCards = [
    {
      header: 'Brand Recognition',
      text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
      img: brandRecognition,
    },
    {
      header: 'Detailed Records',
      text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      img: detailedRecords,
    },
    {
      header: 'Fully Customizable',
      text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      img: fullyCustomizable,
    },
  ];

  return (
    <section className={styles.advBackground}>
      <div className='container'>
        <div className={styles.head}>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={styles.cardsStripeWrapper}>
          <ul className={styles.cardsWrapper}>
            {advCards.map((item) => (
              <AdvCard
                header={item.header}
                text={item.text}
                img={item.img}
                key={item.header}
              />
            ))}
          </ul>
          <div className={styles.stripe}></div>
        </div>
      </div>
    </section>
  );
};

export default Advertising;
