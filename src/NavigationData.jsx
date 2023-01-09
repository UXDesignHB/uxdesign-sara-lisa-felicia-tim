import { AiFillHome } from "react-icons/ai";
import { IconContext } from 'react-icons';

export const NavigationData = [
    {
      title: <IconContext.Provider value={{ size: "1.75rem" }}><AiFillHome /></IconContext.Provider>,
      path: '/',
      cName: 'nav-text'
    },
    {
      title: 'Smältande Glaciärer',
      path: '/smaltande-glaciarer',
      cName: 'nav-text'
    },
    {
      title: 'Stigande Havsnivåer',
      path: '/stigande-havsnivaer',
      cName: 'nav-text'
    },
    {
      title: 'Co2 Utsläpp',
      path: '/co2-utslapp',
      cName: 'nav-text'
    },
    {
      title: 'Global Uppvärmning',
      path: '/global-uppvarming',
      cName: 'nav-text'
    },
    {
      title: 'Vad kan jag göra?',
      path: '/tips',
      cName: 'nav-text'
    },
    {
        title: 'Quiz',
        path: '/fragor',
        cName: 'nav-text'
    }
  ];