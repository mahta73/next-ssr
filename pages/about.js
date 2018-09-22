import Link from 'next/link';

const About = () => (
    <div style = {{fontSize: '20px'}}>
        <h1>I am Mahta</h1>
        <h2>I am getting better and better every single day</h2>
        <h1 style = {{color: 'green'}}>and it makes me feel really happy</h1>

        <Link href = '/'>
            <button>HomePage</button>
        </Link>
    </div>
)

export default About;