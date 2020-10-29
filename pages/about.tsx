import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';

interface Props {
  data: {}
}

const About: NextPage<Props> = ({data}) => {
  const user = useSelector((user)=>user.currentUser.currentUser);

  return (
    <>
    {console.log(data)}
      <div>About: {user ? user.name : ''}</div>
      <Link href='/'>Home</Link>
    </>
  )
}

export const getStaticProps = async ():Promise<any> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json()).then(data=>data);
    return {
      props: {data}
    }
}

export default About;