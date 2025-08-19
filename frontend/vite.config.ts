import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(), 
      dts({
        // rollupTypes: true,
        // tsconfigPath: "./tsconfig.app.json",
        outDir: '../wwwroot/js/webcomponents',
        copyDtsFiles: true,
        insertTypesEntry: true
      }),
    ],

    define: {
      'process.env': JSON.stringify(mode) 
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/components/greeting-wc.ts'), // Path to your entry point
        formats: ['es'], // We'll build an ES Module, the most modern format
        fileName: (format) =>  `greetings-comp.${format}.js`,
      },
  
      outDir: '../wwwroot/js/webcomponents',
  
      // ensure the output directory is empty before building
      emptyOutDir: true,
    }   
  }; 
});


