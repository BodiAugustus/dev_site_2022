import { useContext } from 'react';
import { links } from '../data/data';
import MobMenu from './MobMenu';
import { NavbarContext } from '../providers/NavContext';
import { GiGreekTemple, GiAbstract066 } from 'react-icons/gi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useWeb3 } from '@components/providers/web3';
import { ButtonNav } from '@components/ui';
import { useAccount } from '@components/hooks/web3';

export const NavItem = ({ title, classProps, url, id }) => {
  return (
    <>
      <a
        href={url}
        key={id}
        className={` cursor-pointer font-marcellus tracking-wider first-letter:underline transition-all  rounded-xl hover:rounded-md first-letter:underline-offset-4 first-letter:decoration-2  first-letter:decoration-sky-200 border-transparent border-2
           xxs:first-letter:text-5xl 
           sm:container sm:first-letter:text-6xl sm:mt-12 sm:text-xl
           md:text-xl md:first-letter:text-2xl md:first-letter:no-underline md:tracking-wide md:p-3  md:hover:bg-blue-600 md:hover:border-sky-400
           md:active:bg-sky-500 md:hover:border-2
           lg:text-2xl lg:first-letter:text-2xl lg:first-letter:no-underline lg:tracking-wide lg:relative lg:left-10 
           xl:text-3xl xl:first-letter:text-4xl   
         ${classProps}`}
      >
        {title}
      </a>
    </>
  );
};

const Navbar = () => {
  const { toggleMenu, setToggleMenu } = useContext(NavbarContext);
  const sprucey = 'https://www.sprucey.dev';
  const router = useRouter();
  const { isLoadingWeb3, connect, requireInstall } = useWeb3();
  const { account } = useAccount();

  return (
    <nav className="w-full justify-between items-center">
      <div className="flex relative lg:justify-between justify-between items-center">
        {/* {account} */}
        <div className="ml-2 mt-0 inline-block md:pl-3 lg:ml-[4%]">
          <a href="https://www.sprucey.dev" target="_blank" rel="noreferrer">
            {' '}
            <GiAbstract066 className="text-white text-4xl animate-spin-slow" />
          </a>
        </div>
        <div className="flex gap-3 xs:text-center sm:ml-30 ">
          <h1
            className="text-white  font-bold tracking-wide uppercase first-letter:text-3xl lg:first-letter:text-4xl 
              
                first-letter:text-indigo-200 font-cinzel  xl:text-2xl "
          >
            Seth
          </h1>
          {/* {account} */}
          <h1 className="text-white font-bold tracking-wide uppercase first-letter:text-3xl font-cinzel first-letter:text-indigo-200 lg:first-letter:text-4xl xl:text-2xl">
            Nettles
          </h1>
        </div>

        <ul
          className="relative xs:l-10 text-white md:flex hidden xl:-top-6 
         "
        >
          {links.map((item, index) => (
            <NavItem key={item + index + 1} title={item.name} url={item.url} />
          ))}
        </ul>

        {isLoadingWeb3 ? (
          <ButtonNav disabled={true} onClick={connect}>
            Loading...
          </ButtonNav>
        ) : account.isAdmin ? (
          <ButtonNav disabled={true} className="cursor-default hover:scale-100">
            Hi Bodi!
          </ButtonNav>
        ) : account.data ? (
          <ButtonNav disabled={true} className="cursor-default hover:scale-100">
            Hi Friend!
          </ButtonNav>
        ) : requireInstall ? (
          <ButtonNav
            onClick={() =>
              window.open('https://metamask.io/download.html', '_blank')
            }
          >
            Install MetaMask
          </ButtonNav>
        ) : (
          <ButtonNav onClick={connect}>Connect MetaMask</ButtonNav>
        )}

        <div>
          {!toggleMenu && (
            <GiGreekTemple
              fontSize={48}
              className="text-white md:hidden cursor-pointer mr-4 hover:scale-105 active:scale-100"
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && <MobMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
