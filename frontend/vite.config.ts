import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],

    define: {
      'process.env': JSON.stringify(mode) 
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/components/greeting-wc.ts'), // Path to your entry point
        // name: 'GreetingWebComponent', // A global variable name for UMD builds
        // fileName: (format) => `greeting-wc.${format}.js`, // Output filename
        formats: ['es'], // We'll build an ES Module, the most modern format
      },
  
      outDir: '../wwwroot/js/webcomponents',
  
      // ensure the output directory is empty before building
      emptyOutDir: true,
    }   
  }; 
});


