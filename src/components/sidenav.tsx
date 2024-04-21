import FintechSVG from './fintechSVG';
import resumo from '../assets/icons/resumo.svg';
import vendas from '../assets/icons/vendas.svg';
import { NavLink } from 'react-router-dom';

export default function Sidenav() {

  return (
    <nav className='sidenav box bg-3'>
      <FintechSVG title="Fintech logo" />
      <ul>
        <li>
          <span><img src={resumo} alt="" /></span>
          <NavLink to='/'>Resumo</NavLink>
        </li>
        <li>
          <span><img src={vendas} alt="" /></span>
          <NavLink to='/sales'>Vendas</NavLink>
        </li>
      </ul>
    </nav>
  )
}