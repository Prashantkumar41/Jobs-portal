// import Header from "@/components/header";
// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div>
//       <div className="grid-background"></div>
//       <main className="min-h-screen container">
//         <Header />
//         <Outlet />
//       </main>
//       <div className="p-10 text-center bg-gray-800 mt-10">
//         Made with 💗 by PrashantCoder
//       </div>
//     </div>
//   );
// };

// export default AppLayout;

////////////////////////////// 2nd one 


// import Header from "@/components/header";
// import { Outlet } from "react-router-dom";
// import { Button } from "@/components/ui/button"; // ShadCN UI Button
// import { Linkedin, Github } from "lucide-react"; // Lucide icons for LinkedIn & GitHub

// const AppLayout = () => {
//   return (
//     <div>
//       <div className="grid-background"></div>
//       <main className="min-h-screen container">
//         <Header />
//         <Outlet />
//       </main>
//       <footer className="p-6 text-center bg-gray-900 text-white mt-10">
//         <p className="text-sm">
//           © {new Date().getFullYear()} PrashantCoder. All Rights Reserved.
//         </p>
//         <div className="mt-4 flex justify-center space-x-4">
//           <Button
//             variant="outline"
//             className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-gray-900"
//             onClick={() => window.open("https://www.linkedin.com/in/prashantcoder", "_blank")}
//           >
//             <Linkedin size={18} /> LinkedIn
//           </Button>
//           <Button
//             variant="outline"
//             className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-gray-900"
//             onClick={() => window.open("https://github.com/prashantcoder", "_blank")}
//           >
//             <Github size={18} /> GitHub
//           </Button>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AppLayout;






//// 3rd one 
import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { Linkedin, Github } from "lucide-react"; // Icons

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="p-10 bg-gray-900 text-white mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Copyright */}
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} PrashantCoder. All Rights Reserved.
          </p>

          {/* Right Side: Social Icons */}
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => window.open("https://www.linkedin.com/in/prashant-kumar-sw", "_blank")}
            >
              <Linkedin size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => window.open("https://github.com/Prashantkumar41/Jobs-portal", "_blank")}
            >
              <Github size={24} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;

