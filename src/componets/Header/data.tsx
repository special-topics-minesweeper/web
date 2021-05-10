import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import BarChartIcon from '@material-ui/icons/BarChart';

export const navItems = [{
  title: 'Play',
  icon: <SportsEsportsIcon />,
  href: '/play',
}, {
  title: 'My Profile',
  icon: <AccountCircleIcon />,
  href: '/profile',
}, {
  title: 'Leaderboard',
  icon: <BarChartIcon />,
  href: '/leaderboard',
}, {
  title: 'Instructions',
  icon: <ImportContactsIcon />,
  href: '/instructions',
}]
