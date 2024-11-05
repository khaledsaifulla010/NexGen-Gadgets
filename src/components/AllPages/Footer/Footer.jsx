const Footer = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-3xl">NexGen Gadgets</h1>
        <p className="font-semibold text-lg mt-1">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider px-4"></div>
      <div>
        <footer className="footer ml-64 w-[1000px]  p-10">
          <nav>
            <h6 className="font-bold text-xl">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="font-bold text-xl">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="font-bold text-xl">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
