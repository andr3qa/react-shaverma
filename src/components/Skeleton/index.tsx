import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader
    speed={1}
    width={250}
    height={606}
    viewBox="0 0 250 606"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="20" ry="30" width="250" height="375" />
    <rect x="50" y="400" rx="5" ry="5" width="150" height="24" />
    <rect x="0" y="450" rx="5" ry="10" width="250" height="95" />
    <rect x="2" y="575" rx="5" ry="10" width="55" height="24" />
    <rect x="125" y="565" rx="20" ry="20" width="124" height="39" />
  </ContentLoader>
);
