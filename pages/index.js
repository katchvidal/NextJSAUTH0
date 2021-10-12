import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Layout } from '../components/Layout';


export default function index() {

  return (

    <Layout>

      <h1> Index Page  </h1>

    </Layout>
  )
}

export const getServerSideProps = withPageAuthRequired();