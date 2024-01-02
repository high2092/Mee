import { navBarItem, navBarStyle } from './NavBar.css';
import Link from 'next/link';

const routes: NavBarItemProps[] = [
  { name: 'Task', path: '/' },
  { name: 'Label', path: '/label' },
];

export function NavBar() {
  return (
    <div className={navBarStyle}>
      {routes.map((props) => (
        <NavBarItem key={`route-${props.name}-${props.path}`} {...props} />
      ))}
    </div>
  );
}

interface NavBarItemProps {
  name: string;
  path: string;
}

function NavBarItem({ name, path }: NavBarItemProps) {
  return (
    <Link className={navBarItem} href={path}>
      {name}
    </Link>
  );
}
