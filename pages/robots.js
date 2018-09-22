import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// these props now get the robot property on them
const Robots = (props) => (
    <div>
        <h1>Robots</h1>
        <div>
            {
                props.robots.map(robot => (
                    <li key = {robot.id}>
                        <Link href = {`robots/${robot.id}`}>
                            <button>
                                {robot.name}
                            </button>
                        </Link>
                    </li>
                ))
            }
        </div>

        <Link href = '/'>
            <button>
                homePage
            </button>
        </Link>
    </div>
);

/*
    hey before we load up this robots thing
    lets get some props for it.
*/
Robots.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
    
    return {
        robots: data
    }
}

export default Robots;