import {
  Home,
  CheckSquare,
  Flag,
  Users,
  BarChart2,
  Layers3,
} from 'lucide-react'

import { NavItem } from './NavItem'

export function Navigation() {
  return (
    <nav className="flex flex-col gap-0.5">
      <NavItem icon={Home} title="Home" />
      <NavItem icon={BarChart2} title="Dashboard" />
      <NavItem icon={Layers3} title="Projects" />
      <NavItem icon={CheckSquare} title="Tasks" />
      <NavItem icon={Flag} title="Reporting" />
      <NavItem icon={Users} title="Users" />
    </nav>
  )
}
