import Link from "next/link";

export default function layout({children}) {
    return (
        <div>
            <nav className="mt-6">
                <ul className="flex gap-6">
                    <li><Link href='/about/vision'>Vision</Link></li>
                    <li><Link href='/about/mision'>Mision</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    );
}

