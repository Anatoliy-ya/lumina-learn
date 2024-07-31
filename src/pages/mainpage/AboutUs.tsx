import styles from './MainPage.module.scss';

import Text from 'components/UI/Text';

const AboutUs: React.FC = () => {
  return (
    <>
      <Text size="md" color="primary" style="h3">
        Welcome to LuminaLearn, where dreams transform into careers and learning knows no bounds.
      </Text>
      <Text size="md" color="primary" style="p" className={styles.aboutUsText}>
        Founded over a decade ago,{' '}
        <Text size="md" color="accent" style="span">
          LuminaLearn
        </Text>{' '}
        has evolved into a beacon of knowledge and opportunity, guiding thousands of learners on
        their journey to mastery and professional success. Our story began with a simple yet
        powerful vision: to make high-quality education accessible to everyone, everywhere. Today,
        we stand proud as a leading platform that not only imparts knowledge but also empowers
        individuals to forge their own paths in the world.
      </Text>
      <Text size="md" color="primary" style="p" className={styles.aboutUsText}>
        At{' '}
        <Text size="md" color="accent" style="span">
          LuminaLearn
        </Text>{' '}
        , we believe that education is the key to unlocking one's true potential. Our carefully
        curated courses cover a diverse range of skills and professions, from technology and
        business to creative arts and personal development. Each course is designed by industry
        experts who bring real-world experience and insights into the classroom, ensuring that our
        learners gain practical, applicable knowledge that sets them apart in a competitive job
        market.
      </Text>
      <Text size="md" color="primary" style="p" className={styles.aboutUsText}>
        But we are more than just a platform; we are a community. A community of passionate
        learners, dedicated instructors, and supportive peers. Our interactive learning environment
        fosters collaboration and engagement, allowing you to connect with like-minded individuals,
        share your progress, and celebrate your achievements. Whether you're looking to acquire new
        skills, switch careers, or advance in your current profession, you'll find a welcoming and
        encouraging space here.
      </Text>
      <Text size="md" color="primary" style="p" className={styles.aboutUsText}>
        Over the years, we have witnessed countless success stories—individuals who started with a
        dream and turned it into reality through hard work and determination. Our alumni have gone
        on to secure prestigious positions, start their own businesses, and make meaningful
        contributions to their fields. Their achievements are a testament to the transformative
        power of education and the enduring impact of our platform.
      </Text>
      <Text size="md" color="primary" style="p" className={styles.aboutUsText}>
        We are committed to continuously improving and expanding our offerings to meet the
        ever-evolving needs of the modern workforce. Our courses are regularly updated to reflect
        the latest industry trends and technological advancements, ensuring that our learners are
        always at the forefront of their chosen fields.
      </Text>
      <Text size="md" color="primary" style="p" className={styles.aboutUsText}>
        Join us at{' '}
        <Text size="md" color="accent" style="span">
          LuminaLearn
        </Text>{' '}
        and embark on a journey of lifelong learning and personal growth. Together, we can build a
        brighter future, one course at a time. Whether you're a curious beginner or a seasoned
        professional, we have the tools, resources, and support to help you succeed. Welcome to the
        next chapter of your story—let's write it together.
      </Text>
      <Text size="md" color="primary" style="h2">
        {' '}
        <Text size="md" color="accent" style="span">
          LuminaLearn
        </Text>{' '}
        — where learning meets opportunity.
      </Text>
    </>
  );
};

export default AboutUs;
