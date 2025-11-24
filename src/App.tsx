import { Ship, Stars, Typewriter } from "./components";

export default function App() {
  return (
    <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-2xl relative">
      <Stars />
      <Typewriter />
      <Ship />
    </div>
  );
}
