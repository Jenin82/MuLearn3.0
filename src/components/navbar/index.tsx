import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css'
import { useReactPath } from './path.hook';
import { useEffect } from 'react';
import { Eventssvg, Homesvg, Learningsvg, Profilesvg } from './svg';
type Props = {}


type NavItem = {
  path: string;
  Icon: React.ElementType; 
};

export const Nabvar = (_props: Props) => {
      const navigate = useNavigate();

      const handleNavigation = (value: string) => {
        navigate(value);
      };
      const path = useReactPath();

      const navItems: NavItem[] = [
        { path: "/home", Icon: Homesvg },
        { path: "/learning", Icon: Learningsvg },
        { path: "/events", Icon: Eventssvg },
        { path: "/profile", Icon: Profilesvg },
      ];

      useEffect(() => {}, [path]);

      const renderNavButton = ({ path, Icon }: NavItem) => (
        <button onClick={() => handleNavigation(path)}>
          <Icon
            color={window.location.href.includes(path) ? "#210535" : "#fff"}
          />
        </button>
      );
  return (
    <div className={styles.Wrapper}>
      {navItems.map((item) => renderNavButton(item))}
    </div>
  );
}