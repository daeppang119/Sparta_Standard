import Image from "next/image";
import NavBar from "./NavBar";
import Spacer from "../ui/Spacer";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <Spacer y={20} />
      <section>
        <Image src="/images/logo.png" width={"300"} height={"100"} alt="logo" />
      </section>
      <Spacer y={20} />
      <NavBar />
      <Spacer y={20} />
    </div>
  );
};

export default Header;
