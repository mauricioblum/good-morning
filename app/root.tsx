import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import { useEffect } from 'react';
import globalStylesUrl from './styles/global.css';
import tailwindStyles from './styles/tailwindy.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
    { rel: 'stylesheet', href: tailwindStyles },
  ];
};

export default function App() {
  useEffect(() => {
    if (localStorage.themePreference) {
      localStorage.themePreference === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    } else if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.themePreference = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.themePreference = '';
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-zinc-800 text-neutral-800 dark:text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
