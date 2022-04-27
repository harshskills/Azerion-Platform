import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: "All Products",
    url: "/products",
    icon: "fa-solid fa-house",
    children: []
  },
  {
    name: "Digital Publishers",
    url: "/digital-publishers",
    icon: "fa-solid fa-layer-group",
    children: []
  },
  {
    name: "Advertisers",
    url: "/advertisers",
    icon: "fa-solid fa-bullhorn",
    children: []
  },
  {
    name: "Content",
    url: "/content",
    icon: "fa-solid fa-cubes-stacked",
    children: []
  },
  {
    name: "Charts",
    url: "/",
    icon: "fa-solid fa-chart-area",
    children: [
      {
        name: 'Line-chart',
        url: '/charts/line-chart',
        icon: 'fa-solid fa-cubes-stacked'
      },
      {
        name: 'Bar-chart',
        url: '/charts/bar-chart',
        icon: 'fa-solid fa-cubes-stacked'
      },
      {
        name: 'Bubble-chart',
        url: '/charts/bubble-chart',
        icon: 'fa-solid fa-cubes-stacked'
      },
      {
        name: 'Doughnut-chart',
        url: '/charts/doughnut-chart',
        icon: 'fa-solid fa-cubes-stacked'
      },
      {
        name: 'Pie-chart',
        url: '/charts/pie-chart',
        icon: 'fa-solid fa-cubes-stacked'
      },
      {
        name: 'Radar-chart',
        url: '/charts/radar-chart',
        icon: 'fa-solid fa-cubes-stacked'
      }
    ]
  },

];
