import Link from "next/link";
export default function header(){
    return (
        <div className="header">
           <ul className="header-links">
           <Link href={"/"}><li>Home</li></Link>
           <Link href={"/about"}><li>About Us</li></Link>
           <Link href={"/jobs"} ><li>Jobs</li></Link>
            <Link href={"/contact"}><li>Contact Us</li></Link>
           </ul>
        </div>
    );
}