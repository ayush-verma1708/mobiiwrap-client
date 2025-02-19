import { motion } from 'framer-motion';
import { ArrowRight, Truck, RefreshCw, Shield } from 'lucide-react';
import {products} from '../samples/SampleProd.tsx'; 
import { ProductTile } from '../components/product Components/productTile.tsx'; // Assume you have a products data file.

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full h-[80vh] bg-gradient-to-r from-purple-400 via-yellow-500 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <img 
            // src="public/Mobiiwrap_images/mobii_1.jpg"
            alt="Hero background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            {...fadeInUp}
          >
            Transform Your Device
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-2xl"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Premium mobile skins that protect and personalize your device with style.
          </motion.p>
          <motion.button
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div 
            className="text-center p-6"
            whileHover={{ scale: 1.05 }}
          >
            <Truck className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50</p>
          </motion.div>
          <motion.div 
            className="text-center p-6"
            whileHover={{ scale: 1.05 }}
          >
            <RefreshCw className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day money back guarantee</p>
          </motion.div>
          <motion.div 
            className="text-center p-6"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Durable materials that last</p>
          </motion.div>
        </motion.div>
      </section>

    {/* Featured Products */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Mapping over sampleProducts to render product cards */}
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
            
              <ProductTile
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.images[0]} // Assuming the first image is what you want to display
      />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}