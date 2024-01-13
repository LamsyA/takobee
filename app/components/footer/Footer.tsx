import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import{MdFacebook} from 'react-icons/md';
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-200 shadow-sm text-emerald-600  dark:text-white dark:bg-slate-600 mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="font-bold text-base mb-2">Shop Categories</h3>
            <Link href="#"> Phones</Link>
            <Link href="#"> Laptops</Link>
            <Link href="#"> Destops</Link>
            <Link href="#"> Watches</Link>
            <Link href="#"> TVs</Link>
          </FooterList>
          <FooterList>
            <h3 className="font-bold text-base mb-2">Shop Categories</h3>
            <Link href="#"> Customer Service</Link>
            <Link href="#"> Contact Us</Link>
            <Link href="#"> Shipping Policy</Link>
            <Link href="#"> Returns & Exchanges</Link>
            <Link href="#"> FAQs</Link>
          </FooterList>
          <div className=" w-full md:w-1/3 mb-b md:mb-0">
            <h3 className="text-base font-bold mb-2">About-us</h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p className="text-xs mt-2">
              &copy; {new Date().getFullYear()} Takobee. All rights reserved
            </p>
          </div>
          <FooterList>
            <h3 className="font-bold text-base mb-2">Social Media</h3>
            <div className="flex gap-3"> 
                <Link href="#">
                    <MdFacebook size={24}/>
                </Link>
                <Link href="#">
                    <AiFillInstagram size={24}/>
                </Link>
                <Link href="#">
                    <AiFillTwitterCircle size={24}/>
                </Link> 
                <Link href="#">
                    <AiFillYoutube size={24}/>
                </Link> 
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
