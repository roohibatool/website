import Link from "next/link";


export default function Header() {
    return (
      <div>
        <ul className="flex gap-4 bg-orange-600"> 
         <li> 
           <Link  href="/"> Home</Link>
            </li>
         <li>
            <Link href="/about">About</Link>
         </li>
         <li>
            <Link href="/career">Careers</Link>
            </li>
         <li>
            <Link href="/contact">Contact us</Link>
            </li>
        </ul>
        
      </div>
    );
  }
  