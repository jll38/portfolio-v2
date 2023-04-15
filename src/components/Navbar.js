import navstyle from '../styles/navbar.module.css';
import Link from 'next/link';
export default function Navbar(){
    return(
        <div className={`${navstyle.container} flex-wrap`}>
            <Link href='/' className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700">JL</Link>
        </div>
    );
}