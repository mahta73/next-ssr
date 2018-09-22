import Link from 'next/link';
import Image from '../components/Image';

/* 
    <a></a> -> server side rendering
    <Link></Link> -> client side rendering
*/
const About = () => (
    <div style = {{fontSize: '20px'}}>
        <h1>I am Mahta</h1>
        <Image />
        <h2>I am getting better and better every single day</h2>
        <h1 style = {{color: 'green'}}>and it makes me feel really happy</h1>

        <Link href = '/'>
            <button>HomePage</button>
        </Link>

        <br />
        <br />

        <a href = '/'>
            <button>HomePage</button>
        </a>
    </div>
)

export default About;