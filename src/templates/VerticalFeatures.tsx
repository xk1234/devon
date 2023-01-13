import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Platform"
    description="Unleash the power of learning with our easy-to-use quiz creation platform."
  >
    <VerticalFeatureRow
      title="Get better grades"
      description="Test your understanding of a subject, identify areas where you need to focus more attention, and track your progress over time."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Improve your knowledge"
      description="Strengthen your understanding of various subjects and topics. Track quiz results and analyze data and improve the effectiveness of your quizzes."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Challenge yourself"
      description="By using our quiz creation platform, you can challenge yourself to learn and grow in new ways, and have fun while doing it."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
