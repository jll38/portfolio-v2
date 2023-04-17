import navstyle from '../styles/navbar.module.css';
import Link from 'next/link';
export default function Navbar() {
    return (
        <div className={`${navstyle.container} flex flex-row flex-wrap justify-between`}>
            <div>
                <Link href='/' className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700">JL</Link>
            </div>
            <div>
                <Link href='/blog' className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700">Blog</Link>
            </div>
        </div>
    );
}