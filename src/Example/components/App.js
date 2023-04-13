// * from Repeta lecture1
// import paintings from './paintings.json';
// // import Painting from './components/Painting';
// import PaintingList from './components/PaintingList';

// export default function App() {
//   return (
//     <div>
//       <PaintingList items={paintings} />
//     </div>
//   );
// }

// * Lesson2-styles Example from lecture notes
// import "./index.css";
// import { Alert } from "./components/Alert";
// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error" elevated>
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined>
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

// * Module 5 - Roots Examples from lecture notes

import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { ProductDetails } from '../pages/ProductDetails';
import { Products } from '../pages/Products';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
