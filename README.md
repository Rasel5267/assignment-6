# PC Builder Website - Features and User Guide

## Description:

The PC Builder website is a user-friendly platform that allows users to build their own custom PC by selecting various PC components from different categories. The website is built using Next.js, a popular React framework, and it incorporates Server-Side Generation (SSG) for the Home Page, Featured Category Pages, and Product Detail Pages. It also uses Server-Side Rendering (SSR) for the PC Builder Page, where users can select and add components to their PC build.

## Features:

#### Home Page:

The Home Page showcases random Featured Products from various categories. Each product card displays essential information like the product image, name, category, price, availability, and ratings. Users can click on any featured product card to view its detailed information on the Product Detail Page.

#### Categories Dropdown:

The Navbar includes a Categories dropdown with seven options: CPU, Motherboard, RAM, Power Supply Unit, Storage Device, Monitor, and Others (for peripherals like GPU, Mouse, Keyboard, etc.). Clicking on any category will redirect the user to the respective Featured Category Page displaying at least 3 products of that category.

#### Featured Category Sections:

Each Featured Category Page shows at least 3 products within the chosen category. Users can click on any product card to view its details on the Product Detail Page.

#### Product Detail Page:

The Product Detail Page provides comprehensive information about each PC component, including the product image, name, category, availability, price, description, key features, individual and average ratings, and user reviews.

#### PC Builder Page:

The PC Builder Page enables users to create their custom PC builds by selecting components from categories like CPU, Motherboard, RAM, Power Supply Unit, Storage Device, and Monitor. Users can add components to their build and view them listed below each category section.

#### State Management:

The PC Builder Page uses Redux toolkit to manage the state of the selected components, allowing users to add and remove components from their build easily.

#### Complete Build Button:

The Complete Build button on the PC Builder Page is disabled until the user adds at least 5-6 components (CPU, RAM, Power Supply, Storage, Motherboard, and Casing). Once the user completes the build, they can click this button to see a success alert.

#### Protected/Private Route:

The PC Builder Page is a protected route accessible only to logged-in users. User authentication is implemented using NextAuth, with social login options like Google and GitHub.

#### Responsive Design:

The entire application is responsive, ensuring a seamless user experience on both mobile and desktop devices.

## User Guide:

#### Home Page:

When you land on the Home Page, you'll see Featured Products showcasing various PC components. Click on any product card to view its detailed information on the Product Detail Page.

#### Categories Dropdown:

Use the Categories dropdown in the Navbar to explore products from specific categories. Clicking on a category will take you to the Featured Category Page displaying products of that category.

#### Featured Category Pages:

On each Featured Category Page, you can click on the product cards to view their detailed information on the Product Detail Page.

#### Product Detail Page:

The Product Detail Page provides in-depth information about each PC component. You can also view user reviews and ratings for the product.

#### PC Builder Page:

To access the PC Builder Page and start building your custom PC, you need to log in using either Google or GitHub. Once logged in, you'll be able to select components from categories like CPU, Motherboard, RAM, Power Supply Unit, Storage Device, and Monitor. Click the "Choose" button under each category to view available components. On the component page, click the "Add To Builder" button to add a component to your build. You can add components to each category, and they will be listed below the category section. You can also choose different components to click "Choose" button, that will replace your previously selected component. You can also delete components from the category by clicking "Delete" button.

#### Complete Build Button:

The Complete Build button on the PC Builder Page will be disabled until you add at least 5-6 components to your build. Once your build is complete, click the button to see a success alert.

#### Responsive Design:

The website is designed to adapt to different screen sizes, providing a seamless experience on both mobile and desktop devices.

### Running the Project:

-   Clone the repository to your local machine.
-   Install the required dependencies using npm install.
-   Ensure you have Node.js and npm installed on your system.
-   Set up a NextAuth configuration file to enable social login options (Google/GitHub) for user authentication.
-   Run the development server using npm run dev.
-   Access the website from your browser at the provided localhost address.
