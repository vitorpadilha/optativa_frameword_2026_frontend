import { Routes, Route } from "react-router-dom";
import { PessoasRoutes } from "./modules/pessoa/routes";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
   
      <Route path="/pessoas/*" element={<PessoasRoutes />} />

 
    </Routes>
  );
}