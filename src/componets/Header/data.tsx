import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BarChartIcon from '@material-ui/icons/BarChart';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

export const navItems = [{
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
