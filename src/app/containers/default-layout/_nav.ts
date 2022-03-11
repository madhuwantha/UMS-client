import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Sections',
    title: true
  },
  {
    name: "user",
    url: "/user",
    iconComponent: { name: 'cil-puzzle' },
    children:[
      {
        name: 'Add',
        url: '/user/add'
      },
      {
        name: 'List',
        url: '/user/list'
      }
    ]
  }
];
