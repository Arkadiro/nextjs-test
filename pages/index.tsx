import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import Users from "../components/users";
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';
import { useEffect } from "react";

interface Props {
  data: {},
  title: string
}

const Index: NextPage<Props> = ({data, title}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(setCurrentUser(data[1]));
  },[data])

  const navigate = () => router.push('/about');


  return (
    <>       
      <head>
        <title>{title} - home</title>
      </head>
      <button onClick={()=>navigate()}>About</button>
      <Users data={data} />
    </>
  )};

export const getStaticProps = async (ctx):Promise<any> => {
    // console.log(ctx);
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json()).then(data=>data);

    const title = 'My app'
    return {
      props: {data, title}
    }
}

export default Index