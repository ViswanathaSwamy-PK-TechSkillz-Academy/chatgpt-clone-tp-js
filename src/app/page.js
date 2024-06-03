import { SigninSignup } from "@/components/SigninSignup";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-800 text-white text-center">
        <div className="m-auto">
          <SigninSignup />
        </div>
      </div>
    </>
  );
};

export default Home;
