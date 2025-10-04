### Step 1: Set Up Your Next.js Project

1. **Open your terminal** and navigate to the directory where you want to create your project.

2. **Create a new Next.js project** using the following command:
   ```bash
   npx create-next-app@latest universal-servicios-landing --typescript
   ```

3. **Navigate into your project directory**:
   ```bash
   cd universal-servicios-landing
   ```

4. **Install Tailwind CSS** by following these commands:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

5. **Configure Tailwind CSS** by editing the `tailwind.config.js` file to include the paths to your template files:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           primary: '#1D4ED8', // Customize your primary color
           secondary: '#FBBF24', // Customize your secondary color
           neutral: {
             50: '#F9FAFB',
             600: '#4B5563',
           },
         },
       },
     },
     plugins: [],
   }
   ```

6. **Add Tailwind directives** to your global CSS file. Open `styles/globals.css` and add the following lines at the top:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 2: Create the Project Structure

1. **Create a `components` directory** in the root of your project:
   ```bash
   mkdir components
   ```

2. **Create the `About.tsx` file** inside the `components` directory:
   ```bash
   touch components/About.tsx
   ```

3. **Copy the provided `About.tsx` code** into the newly created file.

### Step 3: Update the Main Page

1. **Open the `pages/index.tsx` file** and import the `About` component. Update the file to include the `About` section:
   ```tsx
   import Head from 'next/head';
   import About from '../components/About';

   export default function Home() {
     return (
       <div>
         <Head>
           <title>Universal Servicios</title>
           <meta name="description" content="Servicios de seguridad y climatización" />
           <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
           <About />
         </main>
       </div>
     );
   }
   ```

### Step 4: Run Your Project

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:3000` to see your landing page with the `About` section.

### Step 5: Create a Workspace in Visual Studio Code

1. **Open Visual Studio Code**.

2. **Open the project folder** by selecting `File` > `Open Folder...` and navigating to your `universal-servicios-landing` directory.

3. **Save the workspace** by selecting `File` > `Save Workspace As...` and giving it a name, e.g., `UniversalServicios.code-workspace`.

### Step 6: Add WhatsApp Button (Optional)

If you want to add a WhatsApp button for easy contact, you can add it to your `About.tsx` component or create a new component for it. Here’s a simple example of how to add a WhatsApp button:

```tsx
// Add this in About.tsx or create a new component
<div className="text-center mt-8">
  <a
    href="https://wa.me/549XXXXXXXXXX" // Replace with your WhatsApp number
    className="bg-green-500 text-white py-2 px-4 rounded-lg"
    target="_blank"
    rel="noopener noreferrer"
  >
    Contáctanos por WhatsApp
  </a>
</div>
```

### Conclusion

You now have a basic Next.js project set up with TypeScript and Tailwind CSS, including the `About.tsx` component. You can further customize the styles and content as needed. If you have any questions or need further assistance, feel free to ask!