import Head from 'next/head';
import '../../style/reset.scss';
const Layout = (props)=>{
    return(
     <div>
            <Head>
                <title>123</title>
            </Head>
           {props.children}
     </div>
    )
}
export default Layout;