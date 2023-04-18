import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CallbackPage = () => {
  const router = useRouter();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.hash.substr(1));
    const accessToken = queryParams.get('access_token');
    // store the access token in a cookie or local storage
    // for example, using the js-cookie library:
    // Cookies.set('access_token', accessToken);
    // or using the browser's local storage API:
    // localStorage.setItem('access_token', accessToken);
    router.push('/');
  }, [router]);
  return null;
};

export default CallbackPage;
