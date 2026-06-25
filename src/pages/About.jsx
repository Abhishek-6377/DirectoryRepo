import AboutOrganic from '../components/about/AboutOrganic';
import AboutGallery from '../components/about/AboutGallery';
import AboutWorkflow from '../components/about/AboutWorkflow';
import AboutStats from '../components/about/AboutStats';
import AboutTeam from '../components/about/AboutTeam';
import AboutHero from '../components/about/AboutHero';

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      <AboutHero/>
      <AboutOrganic />
      <AboutGallery />
      <AboutWorkflow />
      <AboutStats />
      <AboutTeam />
    </div>
  );
};

export default About;