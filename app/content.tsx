import NeedsSection from './sections/needs';
import AboutSection from './sections/about';
import ApproachSection from './sections/approach';
import RouteSection from './sections/recovery-route';
import DirectionsSection from './sections/directions';
import TeamSection from './sections/team';
import SpaceSection from './sections/space';
import ResultSection from './sections/result';
import ReviewsSection from './sections/reviews';
import PricesSection from './sections/prices';
import FaqSection from './sections/faq';
import ContactsSection from './sections/contacts';
import FooterSection from './sections/footer';
export default function Content() {
  return (
    <>
      <NeedsSection />
      <AboutSection />
      <ApproachSection />
      <RouteSection />
      <DirectionsSection />
      <TeamSection />
      <SpaceSection />
      <ResultSection />
      <ReviewsSection />
      <PricesSection />
      <FaqSection />
      <ContactsSection />
      <FooterSection />
    </>
  );
}
