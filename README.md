# Jizzmalflow

Jizzmalflow is a dynamic JSON visualization tool built with [Next.js](https://nextjs.org/), leveraging the power of Tailwind CSS for a modern and responsive UI. Designed to render JSON data interactively with enhanced features like clickable URLs, image previews, and mailto links, Jizzmalflow stands out as a practical and visually appealing tool for developers and content creators alike.

![Screenshot](https://github.com/loftwah/Jizzmalflow/assets/19922556/4c2f9229-91c2-4676-ae84-6bf913429cd2)

## Features

* **Dynamic JSON Viewer:** Visualizes JSON data with syntax highlighting inspired by the "Shades of Purple" VS Code theme.
* **Interactive Elements:** Detects special JSON keys to render clickable links, email addresses, and image thumbnails.
* **Tailwind CSS Integration:** Utilizes Tailwind CSS for a customizable and responsive design.
* **Client-Side Rendering:** Employs the "use client" directive in Next.js for interactive UI components.

## Getting Started

To get started with Jizzmalflow, follow these simple steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/loftwah/jizzmalflow.git
   cd jizzmalflow
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to <http://localhost:3000> to see Jizzmalflow in action.

## Project Structure

* `app/`: Contains the main application code, including the entry point `page.tsx` and the `JsonViewer` component.
* `public/`: Static assets like images (e.g., `public/images/jizzmalflow.jpg`) should be placed here.
* `styles/`: Tailwind CSS and custom CSS files for global styles.

## Contributing

Contributions to Jizzmalflow are welcome! Feel free to fork the repository, make your changes, and submit a pull request.

## Deploy on Vercel

Deploying Jizzmalflow is easiest using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template\&filter=next.js\&utm_source=create-next-app\&utm_campaign=create-next-app-readme), courtesy of the creators of Next.js.

For more details on deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Learn More

To learn more about the technologies used in Jizzmalflow, consider the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
* [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about utility-first styling with Tailwind CSS.

## License

Jizzmalflow is open-sourced under the MIT license. See the [LICENSE](LICENSE) file for more details.
