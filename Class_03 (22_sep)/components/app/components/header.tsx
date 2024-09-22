import Link from "next/link";
export default function header(){
    return (
        <div className="header">
           <ul className="header-links">
           <Link href={"/"}><li>Home</li></Link>
           <Link href={"/about-us"}><li>About Us</li></Link>
           <Link href={"/jobs"} ><li>Jobs</li></Link>
            <Link href={"/contact-us"}><li>Contact Us</li></Link>
           </ul>
        </div>
    );
}