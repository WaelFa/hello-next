import Link from "next/link";
export default function About() {
    return (
        <div>
            <p>this is the about page</p>
            <Link href="/">
                <button>Get back</button>
            </Link>
        </div>
    )
}