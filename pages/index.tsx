import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import Users from "../components/users";
import {useRouter} from 'next/router';

interface Props {
  data: {}
}
const Index: NextPage<Props> = ({data}) => {
  const router = useRouter();
  const navigate = () => router.push('/about');
  return (
    <>  
      <button onClick={()=>navigate()}>About</button>
      <Users data={data} />
    </>
  )};

export const getStaticProps = async ():Promise<any> => {
  console.log();
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json()).then(data=>data);
    return {
      props: {data}
    }
}

export default Index