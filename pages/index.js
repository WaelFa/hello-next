import Link from 'next/link';


const Index = () => {
    return (
        <div>
            <Link href="/about">
                <a> bout page</a>
            </Link>
            <p>Hello Next.js</p>
        </div>)
};

export default Index