import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  data: {}
}

const About: NextPage<Props> = ({data}) => (
  <>
  {console.log(data)}
    <div>About: {data[0]['name']}</div>
    <Link href='/'>Home</Link>
  </>
)

export const getStaticProps = async ():Promise<any> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json()).then(data=>data);
    return {
      props: {data}
    }
}

export default About;